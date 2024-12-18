import { useEffect, useState } from "react";

export const Carousel = ({imgs}) => {
    const [current,setCurrent] = useState(0);

    useEffect(()=>{
        const clock = setInterval(()=>{
            current == imgs.length - 1 ? setCurrent(current) : setCurrent(current+1);
        },5000)
        return ()=>{
            console.log("unmounted");
            clearInterval(clock);
        }
    },[current])

    return <>
        <div className="child w-full overflow-hidden">
            <div className="flex transition-transform ease-out duration-500" style={{transform : `translateX(${current*-100}%)`}}>
                {imgs.map((url,index)=>(
                    <img src={url} key={index}></img>
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
                {imgs.map((_,index)=>(
                    <div key={index} onClick={()=>{setCurrent(index)}} className={`cursor-pointer rounded-full ${current==index ? "w-3 h-3 bg-mainColor" : "w-2 h-2 bg-slate-400"}`}>
                    
                    </div>
                ))}
            </div>
        </div>
    </>
}