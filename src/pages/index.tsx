import type { NextPage } from 'next'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { HiOutlineDocumentText as DocIcon } from 'react-icons/hi'
import { MotionButton, Link } from '@components'

const App: NextPage = () => {
  const nextJSColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')
  const chakraColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  return (
    <Box as='section'>
      <Heading as='h1' fontSize='6xl'>
        <Link
          isExternal
          color={nextJSColor}
          href='https://nextjs.org'
        >
          Next.js
        </Link>{' '}
        <Link
          isExternal
          color={chakraColor}
          href='https://chakra-ui.com'
        >
          Chakra UI
        </Link>
        {' Starter'}
      </Heading>

      <Box mt={4}>
        <Link href='/docs'>
          <MotionButton
            colorScheme='pink'
            leftIcon={<DocIcon />}
            size='lg'
            variant='solid'
          >
            Docs
          </MotionButton>
        </Link>
      </Box>
    </Box>
  )
}

export default App
