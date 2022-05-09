import { Box, Flex } from '@chakra-ui/react'
import Link from '@components/Link'
import Card from '@components/Card'
import { BiChevronLeft as LeftIcon } from 'react-icons/bi'
import MotionButton from '@components/MotionButton'

const App = () => {
  return (
    <Flex
      as='section'
      align='center'
      justify='center'
      flexWrap='wrap'
      maxW={800}
      w='100%'
      flexDir={['column', 'row']}
    >
      <Card
        href='https://nextjs.org/docs'
        title='NextJS Docs'
        description='Find in-depth information about Next.js features and API.'
      />

      <Card
        href='https://chakra-ui.com/docs'
        title='Chakra UI Docs'
        description='Learn how to use the Chakra UI components.'
      />

      <Box mt={4}>
        <Link href='/'>
          <MotionButton
            leftIcon={<LeftIcon />}
            size='lg'
            variant='solid'
            colorScheme='pink'
          >
            Home
          </MotionButton>
        </Link>
      </Box>
    </Flex>
  )
}

export default App
