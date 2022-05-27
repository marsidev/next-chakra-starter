import type { GetServerSideProps } from 'next'
import type { StorageManager, ChakraProviderProps as ProviderProps } from '@chakra-ui/react'

import { FC, ReactNode } from 'react'
import { ChakraProvider as Provider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import { theme } from '@lib/theme'

interface ChakraProviderProps extends ProviderProps {
  children: ReactNode
  cookies?: string
}

export const ChakraProvider: FC<ChakraProviderProps> = ({ cookies, children }) => {
  const colorModeManager: StorageManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <Provider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { req } = context
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
