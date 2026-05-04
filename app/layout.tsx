import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackDigest — Daily digest of important Slack threads",
  description: "AI analyzes your Slack threads by engagement and keywords, then sends a daily digest of must-read conversations straight to your inbox."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e4bec57e-b07b-49c9-aa1b-843f8fcf4490"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
