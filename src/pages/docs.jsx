import { Box, Flex } from '@chakra-ui/react'
import Link from '@components/Link'
import Card from '@components/Card'
import { BiChevronLeft as LeftIcon } from 'react-icons/bi'
import MotionButton from '@components/MotionButton'

const App = () => {
  return (
    <Flex
      align='center'
      as='section'
      flexDir={['column', 'row']}
      flexWrap='wrap'
      justify='center'
      maxW={800}
      w='100%'
    >
      <Card
        description='Find in-depth information about Next.js features and API.'
        href='https://nextjs.org/docs'
        title='NextJS Docs'
      />

      <Card
        description='Learn how to use the Chakra UI components.'
        href='https://chakra-ui.com/docs'
        title='Chakra UI Docs'
      />

      <Box mt={4}>
        <Link href='/'>
          <MotionButton
            colorScheme='pink'
            leftIcon={<LeftIcon />}
            size='lg'
            variant='solid'
          >
            Home
          </MotionButton>
        </Link>
      </Box>
    </Flex>
  )
}

export default App
