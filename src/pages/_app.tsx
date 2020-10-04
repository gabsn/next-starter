import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
