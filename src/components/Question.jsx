import { useState } from "react";
import { PlusIcon } from "../icons/PlusIcon"
import { MinusIcon } from "../icons/MinusIcon";
import {motion, AnimatePresence } from "framer-motion";

export const Question = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return <div className="w-full rounded-lg mb-2">
        <div onClick={handleVisibility}  className="flex items-center justify-between text-md md:text-xl text-black border-mainColor bg-white border-2 font-bold mb-2 px-4 py-2 rounded-lg">
            {props.question}
            <div>
                {isVisible ? <MinusIcon /> : <PlusIcon />}
            </div>
            </div>
            <AnimatePresence>
                {
                isVisible && 
                <motion.div 
                        variants={{
                            away:{height:0,opacity:0},
                            visible:{height:"auto",opacity:1}
                        }}
                        initial="away"
                        animate="visible"
                        exit="away"
                        transition={{
                            duration : 0.5,
                            delay:0,
                            ease : 'easeInOut'
                        }}
                        className="text-lg px-6 ">
                    
                    {props.answer}
                </motion.div>}
            </AnimatePresence>
        <br />
    </div>
}