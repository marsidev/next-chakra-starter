import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ScaleFade } from '@chakra-ui/react'
import { ChakraProvider } from '@lib/Chakra'
import Layout from '@layouts/main'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <Layout>
        <ScaleFade key={router.route} in={true} initialScale={0.85}>
          <Component {...pageProps} />
        </ScaleFade>
      </Layout>
    </ChakraProvider>
  )
}
