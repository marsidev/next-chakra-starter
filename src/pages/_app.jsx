import '@styles/globals.css'
import { ChakraProvider, ScaleFade } from '@chakra-ui/react'
import { theme } from '@lib/theme'
import Layout from '@layouts/main'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ScaleFade key={router.route} in={true} initialScale={0.85}>
          <Component {...pageProps} />
        </ScaleFade>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
