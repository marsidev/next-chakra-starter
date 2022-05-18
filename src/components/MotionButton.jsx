import { Button as ChakraButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const variants = {
  initial: { scale: 1 },
  tap: { scale: 0.9, transition: { duration: 0.1, ease: 'easeOut' } }
}

const MotionButton = ({ children, ...props }) => {
  const Button = motion(ChakraButton)

  return (
    <Button initial='initial' variants={variants} whileTap='tap' {...props}>
      {children}
    </Button>
  )
}

export default MotionButton
