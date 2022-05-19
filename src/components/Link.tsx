import React from 'react'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type ChakraAndNextProps = ChakraLinkProps & NextLinkProps;

export const Link = ({ href, children, textDecoration = 'none', ...props }: ChakraAndNextProps) => (
  <NextLink passHref href={href}>
    <ChakraLink _hover={{ textDecoration }} {...props}>
      {children}
    </ChakraLink>
  </NextLink>
)

export default Link
