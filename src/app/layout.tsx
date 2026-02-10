/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";

import { Layout, FixedPlugin } from "@/components"; 

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700", "900"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Thato Mphugo Portfolio",
  description:
    "Portfolio website Thato Thabang Mphugo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script 
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="icon" href="/profile/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/profile/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/profile/favicon.png" />  
      </head> 
      <body >
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
