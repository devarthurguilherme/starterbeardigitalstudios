import React from 'react'
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, 30],
    transition: {

    }
  }
}

const Loader = () => {
  return (
    <>
        <motion.div 
          className="loader"
          initial={{scale: 0}}
          animate={{scale: 2}}
          transition={{
          duration: "3",
          delay: "2.5"
          }} 
        >
        </motion.div>
    </>
  )
}

export default Loader