import {
	Flex,
	chakra,
	useColorModeValue
} from '@chakra-ui/react'
import Link from '@components/Link'
import VercelIcon from '@components/VercelIcon'

const Footer = () => {
	return (
		<chakra.footer
			as='footer'
			display='flex'
			flex={1}
			py={4}
			borderTop='1px solid #eaeaea'
			justifyContent='center'
			alignItems='center'
			flexDir='row'
		>
			<Flex justifyContent='center' alignItems='center'>
				<Link
					isExternal
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
				>
					Powered by{' '}
					<chakra.span ml={2} display='inline-block'>
						<VercelIcon
							fill={useColorModeValue('#000', '#fff')}
							width='18'
							height='4'
						/>
					</chakra.span>
				</Link>
			</Flex>
		</chakra.footer>
	)
}

export default Footer
