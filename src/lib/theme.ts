import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: 'none'
      }
    }
  }
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

export const theme = extendTheme({ config, components })
