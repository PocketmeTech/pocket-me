import {motion} from "framer-motion";

function Hero(){
    return (
         <motion.div 
            variants={{
                hidden:{opacity:0},
                visible:{opacity:1}
            }}
            initial="hidden"
            animate="visible"
            transition={{
                duration:1,
                delay:1
            }}
            className="z-10 flex w-full bg-mainColor px-10 md:px-20 py-12 justify-start gap-16 flex-col md:flex-row ">
            <motion.div className="flex flex-col justify-center gap-10 "
                variants={{
                    away:{x:-1500},
                    visible:{x:0},
                }}
                initial="away"
                animate="visible" 
                transition={{
                    duration : 1,
                    delay:1
                }}
            >
                <h1 className="text-5xl font-bold leading-normal">Quick, easy and hassle-free personal loans</h1>
                <p>Get instant access to personal loan upto ₹1,00,000 with Pocketme.</p>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <a href="https://t.ly/r8itP">
                        <img className="w-80" src="/google-play.png" alt="" />
                    </a>
                    {/*
                    <a href="#">
                        <img className="w-80" src="/app-store.png" alt="" />
                    </a>*/}
                </div>
            </motion.div>
            <motion.div className="flex-grow flex justify-center"
                variants={{
                    away:{x:1200},
                    visible:{x:0},
                }}
                initial="away"
                animate="visible"
                transition={{
                    duration : 0.5,
                    delay:1
                }}
            >
                <img className="max-w-xs self-center" src="/slider-dec.png" alt="slider" />
            </motion.div>
        </motion.div>
    )
}

export default Hero;