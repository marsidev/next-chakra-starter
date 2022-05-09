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

const GITHUB_URL = 'https://github.com/marsigliadev'

const Footer = ({ ...props }) => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex
      as='footer'
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop='1px solid'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      width='100%'
      h='auto'
      justify='center'
      align='center'
      {...props}
    >
      <Flex h='full' w='100%' maxW='5xl'>
        <Flex
          justify='space-between'
          align='center'
          w='100%'
          h='auto'
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: 2, md: 0 }}
        >
          <Text
            color={useColorModeValue('#8e8e8e', 'gray.500')}
            fontSize={16}
            fontWeight={600}
          >
            {'Made with ♥ by '}
            <Link
              href={GITHUB_URL}
              color={useColorModeValue('teal.400', 'teal.300')}
              isExternal
              textDecoration='underline'
            >
              Luis Marsiglia
            </Link>
            {'.'}
          </Text>

          <HStack justify='center'>
            <Icon as={SunIcon} w={4} h={4} />
            <Switch
              colorScheme='teal'
              size='md'
              onChange={toggleColorMode}
              isChecked={colorMode === 'dark'}
            />
            <Icon as={MoonIcon} w={4} h={4} />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
