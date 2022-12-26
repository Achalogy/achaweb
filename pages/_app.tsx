import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"></link>
    <Component {...pageProps} />
  </>
}
