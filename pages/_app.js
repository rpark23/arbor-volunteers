import '../styles/globals.css'
import { MantineProvider } from "@mantine/core"

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withCSSVariables
    >
      <Component {...pageProps}/>
    </MantineProvider>
  )
}

export default MyApp
