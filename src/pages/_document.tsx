import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="スバラシイ - 革新的な空気清浄機。あなたの生活を変える、驚きの空気清浄テクノロジー。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.example.com" />

        {/* OGP Tags */}
        <meta property="og:title" content="スバラシイ - 革新的な空気清浄機" />
        <meta
          property="og:description"
          content="あなたの生活を変える、驚きの空気清浄テクノロジー。スバラシイで、新鮮な空気を。"
        />
        <meta
          property="og:image"
          content="https://www.example.com/ogp-image.jpg"
        />
        <meta property="og:url" content="https://www.example.com" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
