import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <head>
        <title>Insurance Tech</title>
      </head> */}
      <Head />
      <body className="flex justify-center h-[95dvh] overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
