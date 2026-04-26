import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App, { AppRoutes } from "./App";

export interface RenderResult {
  html: string;
  helmet: {
    title: string;
    meta: string;
    link: string;
    script: string;
    htmlAttributes: string;
    bodyAttributes: string;
  };
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <App helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </App>
  );

  const helmet = helmetContext.helmet;
  return {
    html,
    helmet: {
      title: helmet?.title?.toString() ?? "",
      meta: helmet?.meta?.toString() ?? "",
      link: helmet?.link?.toString() ?? "",
      script: helmet?.script?.toString() ?? "",
      htmlAttributes: helmet?.htmlAttributes?.toString() ?? "",
      bodyAttributes: helmet?.bodyAttributes?.toString() ?? "",
    },
  };
}
