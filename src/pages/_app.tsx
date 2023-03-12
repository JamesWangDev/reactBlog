import { SEO } from "@utils/next-seo.config"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import * as React from "react"

import { DefaultSeo } from "next-seo"
import { GlobalProvider } from "../contexts/GlobalContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on("routeChangeStart", handleRouteStart)
    router.events.on("routeChangeComplete", handleRouteDone)
    router.events.on("routeChangeError", handleRouteDone)

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart)
      router.events.off("routeChangeComplete", handleRouteDone)
      router.events.off("routeChangeError", handleRouteDone)
    }
  })

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <GlobalProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default MyApp
