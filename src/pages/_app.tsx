import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

// Reset CSS
import "normalize.css";

// Style basic elements globally
import "./_app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={{}}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
