import { motion } from "framer-motion"
import Logo from "../img/Logo.png"

const LogoBDS = () => {
  return (
    <motion.div 
      className="max-w-md mx-auto p-2 bg-Black"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: "3",
        delay: "1"
      }}
    >
      <div className="flex justify-center flex-col">
        <motion.div 
          className="flex justify-end"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
          duration: "3",
          delay: "1.2"
      }} 
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-[8rem] md:w-[15rem] flex-end"
          />
        </motion.div>
        <div className="flex flex-col">
          <motion.h1 
            className="my-1 text-right whitespace-nowrap text-5xl md:text-7xl font-semibold"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: "3",
              delay: "1.4"
            }}  
          >
            Bear Digital
          </motion.h1>
          <div className="text w-2/5 md:w-3/5 self-end bg-Black">
            <motion.h1 
              className="text-left text-2xl md:text-4xl py-2 font-semibold"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                duration: "3",
                delay: "1.6"
              }}
            >
              studios
            </motion.h1>
            <motion.div 
              className="border-t border-4 md:border-8 border-White"
                initial={{x: -2000}}
                animate={{x: 0}}
                transition={{
                duration: "3",
                delay: "1"
                }}    
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LogoBDS