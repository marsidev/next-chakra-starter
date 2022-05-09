import { Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Link from '@components/Link'

const Card = ({ href, title, description }) => {
  const bg = useColorModeValue('pink.500', 'pink.200')
  const hoverBg = useColorModeValue('pink.600', 'pink.300')
  const fontColor = useColorModeValue('white', 'gray.800')

  return (
    <Link
      as='article'
      isExternal
      href={href}
      m={4}
      p={6}
      textAlign='left'
      bg={bg}
      borderRadius={12}
      transition='0.15s all ease-in-out'
      maxW='340px'
      h='180px'
      color={fontColor}
      _hover={{ bg: hoverBg }}
      _active={{ bg: hoverBg }}
    >
      <Heading as='h2' fontSize='2xl'>
        {title} &rarr;
      </Heading>
      <Text fontSize='lg'>{description}</Text>
    </Link>
  )
}

export default Card
