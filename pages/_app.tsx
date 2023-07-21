import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-800 text-white font-serif">
      <Component {...pageProps} />
    </div>
  );
}
