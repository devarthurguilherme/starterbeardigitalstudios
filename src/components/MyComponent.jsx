import { motion } from "framer-motion"
import React from 'react'

const MyComponent = () => {
  return (
    <motion.h1
        initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
            duration: "2",
            delay:"1"
        }}
    >
        Motion Test
    </motion.h1>
  )
}

export default MyComponent