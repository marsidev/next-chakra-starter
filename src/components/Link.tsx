import type { FC } from 'react'
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import type { LinkProps as NextLinkProps } from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

type LinkProps = ChakraLinkProps & NextLinkProps

export const Link: FC<LinkProps> = ({ href, children, textDecoration = 'none', ...props }) => (
  <NextLink passHref href={href}>
    <ChakraLink _hover={{ textDecoration }} {...props}>
      {children}
    </ChakraLink>
  </NextLink>
)

export default Link
