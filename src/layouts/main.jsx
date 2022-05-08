import { Flex } from '@chakra-ui/react'
import Footer from '@components/Footer'
import { DefaultSeo } from 'next-seo'
import { defaultSeo } from 'next-seo.config'

export default function Layout({ children }) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />

      {/* <Navbar h='10vh' /> */}
      <Flex
        as='main'
        minH='90vh'
        flexDir='column'
        justify='center'
        alignItems='center'
        textAlign='center'
        flex={1}
        py={14}
        w='100%'
      >
        {children}
      </Flex>
      <Footer h='10vh' />
    </>
  )
}
