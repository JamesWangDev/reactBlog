import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"

import { GlobalProvider } from "../contexts/GlobalContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default MyApp
