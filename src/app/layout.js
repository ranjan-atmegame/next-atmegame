import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";
import Layout from "@/components/layout";
// import { SITE_URL } from "@/config";
// import SessionProvider from "@/context/Provider";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Online Games: Play Free Online Games",
//   description: "Online Games: Play Free Online Games",
// };

const jsonLd = () => {
  return {
    __html: `[{"@context":"http://schema.org","@type":"WebSite","name":"Atmegame.com","url":"https://www.atmegame.com/","potentialAction":{"@type":"SearchAction","target":"https://www.atmegame.com/search/?search_str={search_term_string}","query-input":"required name=search_term_string"},"publisher":{"@type":"Organization","name":"Apay Marketing Private Limited","url":"//atmegame.com/","logo":{"@type":"ImageObject","url":"https://image.atmegame.com/logo.png","width":420,"height":70}}}]`,
  };
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-US"
      className={poppins.className}
      suppressHydrationWarning={true}
    >
      <head>
        <meta content="362528583948002" property="fb:pages" />
        <meta content="100009165479651" property="fb:admins" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="Apay Marketing Private Limited" />
        <meta
          name="copyright"
          content="Copyright © 2023 by Apay Marketing Private Limited, All rights reserved."
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />

        <script
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd()}
        />

        <Script
          async
          crossorigin="anonymous"
          data-ad-frequency-hint="30s"
          data-ad-channel="7038451953"
          data-ad-client="ca-pub-9733910408335876"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></Script>

        <Script async src={`/js/ads.js`}></Script>

        <Script id="google-ad-config" strategy="beforeInteractive">
          {`window.adsbygoogle = window.adsbygoogle || []; var adBreak = (adConfig = function (o) { adsbygoogle.push(o);});adConfig({ preloadAdBreaks: "on" })`}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-213644786-1"
        ></Script>

        <Script async id="google-tag-layer" strategy="beforeInteractive">
          {`(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : ""; j.async = true; j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl; f.parentNode.insertBefore(j, f); })(window, document, "script", "dataLayer", "GTM-5FD9Q5Q");`}
        </Script>

        <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ></Script>

        <Script async src={`/js/AdX.js`}></Script>
        {/* <link rel="preload" href="/img/blueBg_1x.png" as="image" /> */}
      </head>

      <body className={poppins.className}>
        <Layout>{children}</Layout>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            async
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FD9Q5Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
