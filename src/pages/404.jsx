import { Heading, Container, Center, HStack, StackDivider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

const Custom404 = () => {
  return (
    <>
      <DefaultSeo title='404' />
      <Container>
        <Center>
          <HStack
            divider={<StackDivider minH='50px' borderColor='gray.400' />}
            spacing={4}
            align='center'
          >
            <Heading as='h1' fontWeight={600} fontSize={24}>
              404
            </Heading>

            <Heading as='h2' fontWeight={400} fontSize={14}>
              This page could not be found.
            </Heading>
          </HStack>
        </Center>
      </Container>
    </>
  )
}

export default Custom404
