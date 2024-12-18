import { Carousel } from "./Carousel"
import { Point } from "./Point"

export const Step = (props) => {
    return <div className="w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-16">
            {!props.reverse && <div>
                <div className="text-4xl font-bold py-2">{props.title}</div>
                <div className="py-2">
                    {props.description.map((element,idx)=>(
                        <Point key={idx} description={element} />
                    ))}
                </div>
            </div>}
            <div className="w-48 ">
                <Carousel imgs={props.imgs} />
            </div>
            {props.reverse && <div>
                <div className="text-4xl font-bold py-2">{props.title}</div>
                <div className="py-2">
                    {props.description.map((element,idx)=>(
                        <Point key={idx} description={element} />
                    ))}
                </div>
            </div>}
        </div>
    </div>
}