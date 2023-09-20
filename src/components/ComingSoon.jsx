import { motion as m } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="text-center">
        {/*
            <div className="lg:hidden">
            <motion.h1 
                className="text-xl md:text-9xl font-bold uppercase"
                initial={{x: -1000, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: "3",
                    delay: "1.5"
                }}
            >
                Coming
            </motion.h1>
            <div>
                <motion.h1 
                    className="text-xl md:text-9xl font-bold uppercase"
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{
                    duration: "3",
                    delay: "1.5"
                }}   
                >
                    Soon
                </motion.h1>
                <motion.div 
                    className="border-t border-4 md:border-8 border-White"
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{
                    duration: "3",
                    delay: "1.7"
                    }}  
                ></motion.div>
            </div>
        </div>
        */}
        
        <div className="">
            <m.h1 
                className="text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                initial={{x: -2000, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: "3",
                    delay: "1"
                }}>
                Coming Soon
            </m.h1>
        </div>
    </div>
    
  )
}

export default ComingSoon