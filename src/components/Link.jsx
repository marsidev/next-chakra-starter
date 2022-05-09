import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const CustomLink = ({ href, children, textDecoration = 'none', ...props }) => (
  <NextLink passHref href={href}>
    <Link _focus={false} _hover={{ textDecoration }} {...props}>
      {children}
    </Link>
  </NextLink>
)

export default CustomLink
