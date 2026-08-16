import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROUTES = [
  "/",
  "/learn",
  "/faq",
  "/about",
  "/privacy-policy",
  "/terms-of-service",
];

const distDir = path.resolve("dist");
const serverEntry = path.resolve("dist/server/entry-server.js");
const templatePath = path.resolve("dist/index.html");

function routeToFile(route) {
  if (route === "/") return path.join(distDir, "index.html");
  return path.join(distDir, route.replace(/^\//, ""), "index.html");
}

function injectHead(template, helmet) {
  const headTags = [
    helmet.title,
    helmet.meta,
    helmet.link,
    helmet.script,
  ]
    .filter(Boolean)
    .join("\n    ");

  // Remove the static <title> from index.html so the per-page title wins.
  let out = template.replace(/<title>[\s\S]*?<\/title>/i, "");
  // Strip default OG/Twitter tags so per-page Helmet versions are authoritative.
  out = out.replace(
    /\s*<meta\s+(?:name|property)="(?:description|keywords|og:[^"]+|twitter:[^"]+)"[^>]*>/gi,
    ""
  );
  // Strip the static og:url so each page gets its own.
  out = out.replace(/\s*<meta\s+property="og:url"[^>]*>/gi, "");

  return out.replace("</head>", `    ${headTags}\n  </head>`);
}

function injectBody(template, appHtml) {
  return template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
}

async function main() {
  const template = await fs.readFile(templatePath, "utf-8");
  const { render } = await import(pathToFileURL(serverEntry).href);

  for (const route of ROUTES) {
    const { html, helmet } = render(route);
    let page = injectHead(template, helmet);
    page = injectBody(page, html);

    const outFile = routeToFile(route);
    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, page, "utf-8");
    console.log(`✓ prerendered ${route} -> ${path.relative(process.cwd(), outFile)}`);
  }

  // Clean up SSR build output (not needed at runtime).
  await fs.rm(path.resolve("dist/server"), { recursive: true, force: true });
  console.log("✓ removed dist/server");
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
