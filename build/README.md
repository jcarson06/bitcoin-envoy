# Social card (`public/og-image.jpg`)

The 1200×630 Open Graph / X card. **1200×630 is not decorative** — `twitter:card`
is `summary_large_image`, which is a 2:1 slot, and `SEO.tsx` declares
`og:image:width=1200` / `og:image:height=630`. If the rendered file stops
matching that declaration, X has no valid crop and drops the card entirely.
That is exactly the bug this replaced: the old card was a 1024×1024 square
declared as 1200×630, hosted on a Lovable-owned GCS bucket.

## Files

| File | Role |
|---|---|
| `og-photo.html` | Source of the shipped card — neon Bitcoin photo + text overlay |
| `og-typographic.html` | Text-only alternative, kept as a fallback design |
| `source-neon-bitcoin.png` | The original 1024×1024 art, pulled off the old GCS bucket |
| `og-photo.png` | Raw Brave render (~940 KB, intermediate) |

## Regenerate

```sh
cd ~/Claude/bitcoin-envoy/build
BRAVE="/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"

"$BRAVE" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=6000 \
  --screenshot="$PWD/og-photo.png" "file://$PWD/og-photo.html"

sips -s format jpeg -s formatOptions 85 og-photo.png --out ../public/og-image.jpg
```

`--virtual-time-budget=6000` is load-bearing: the card pulls Inter and Playfair
Display from Google Fonts, and without the wait Brave screenshots the fallback
serif before the webfonts land.

Quality 85 was chosen by comparison — 942 KB → 208 KB with no visible banding in
the dark gradient wash. Below ~80 the wash starts to band.

## After regenerating

Confirm the output really is 1200×630 before shipping:

```sh
sips -g pixelWidth -g pixelHeight ../public/og-image.jpg
```

X caches card data per URL for several days. After deploying a new card, post
the link with a throwaway query param (`?x=1`) once to force a re-scrape.
