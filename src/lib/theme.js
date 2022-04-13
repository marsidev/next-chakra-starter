import { extendTheme } from '@chakra-ui/react'

const components = {
	Button: {
		baseStyle: {
			_focus: {
				boxShadow: 'none'
			}
		}
	}
}

export const theme = extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: true,
	components
})
