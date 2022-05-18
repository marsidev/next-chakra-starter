import {
  Flex,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { BsSunFill as SunIcon, BsMoonFill as MoonIcon } from 'react-icons/bs'
import Link from '@components/Link'

const GITHUB_URL = 'https://github.com/marsidev'

const Footer = ({ ...props }) => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex
      align='center'
      as='footer'
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      borderTop='1px solid'
      color={useColorModeValue('gray.700', 'gray.200')}
      h='auto'
      justify='center'
      width='100%'
      {...props}
    >
      <Flex h='full' maxW='5xl' w='100%'>
        <Flex
          align='center'
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: 2, md: 0 }}
          h='auto'
          justify='space-between'
          w='100%'
        >
          <Text
            color={useColorModeValue('#8e8e8e', 'gray.500')}
            fontSize={16}
            fontWeight={600}
          >
            {'Made with ♥ by '}
            <Link
              isExternal
              color={useColorModeValue('teal.400', 'teal.300')}
              href={GITHUB_URL}
              textDecoration='underline'
            >
              Luis Marsiglia
            </Link>
            {'.'}
          </Text>

          <HStack justify='center'>
            <Icon as={SunIcon} h={4} w={4} />
            <Switch
              colorScheme='teal'
              isChecked={colorMode === 'dark'}
              size='md'
              onChange={toggleColorMode}
            />
            <Icon as={MoonIcon} h={4} w={4} />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
