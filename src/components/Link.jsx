import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

const Link = ({ href, children, textDecoration = 'none', ...props }) => (
  <NextLink passHref href={href}>
    <ChakraLink _focus={false} _hover={{ textDecoration }} {...props}>
      {children}
    </ChakraLink>
  </NextLink>
)

export default Link
