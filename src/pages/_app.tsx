import '@styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider, ScaleFade } from '@chakra-ui/react'
import { theme } from '@lib/theme'
import Layout from '@layouts/main'

export default function MyApp({ Component, pageProps, router }: AppProps) {
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
