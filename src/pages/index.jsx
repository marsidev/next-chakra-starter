import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import Link from '@components/Link'
import { HiOutlineDocumentText as DocIcon } from 'react-icons/hi'
import MotionButton from '@components/MotionButton'

const App = () => {
  return (
    <Box as='section'>
      <Heading as='h1' fontSize='6xl'>
        <Link
          isExternal
          color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
          href='https://nextjs.org'
        >
          Next.js
        </Link>{' '}
        <Link
          isExternal
          color={useColorModeValue('teal.500', 'teal.300')}
          href='https://chakra-ui.com'
        >
          Chakra UI
        </Link>
        {' Starter'}
      </Heading>

      <Box mt={4}>
        <Link href='/docs'>
          <MotionButton
            leftIcon={<DocIcon />}
            size='lg'
            variant='solid'
            colorScheme='pink'
          >
            Docs
          </MotionButton>
        </Link>
      </Box>
    </Box>
  )
}

export default App
