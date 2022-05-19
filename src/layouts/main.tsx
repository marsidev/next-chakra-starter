import { ReactNode, FC } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { GitCorner, Footer } from '@components/index'
import { DefaultSeo } from 'next-seo'
import { defaultSeo } from 'next-seo.config'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <DefaultSeo {...defaultSeo} />

      {/* <Navbar h='10vh' /> */}
      <Flex
        alignItems='center'
        as='main'
        flex={1}
        flexDir='column'
        justify='center'
        minH='92vh'
        py={14}
        textAlign='center'
        w='100%'
      >
        {children}
      </Flex>
      <Footer h='8vh' />

      <Box as='aside'>
        <GitCorner url='https://github.com/marsidev/next-chakra-starter' />
      </Box>
    </>
  )
}

export default Layout
