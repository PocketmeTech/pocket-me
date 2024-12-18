import { RightArrow } from "../icons/RightArrow"

export const Point = (props) => {
    return <>
        <div className="flex gap-4 items-center py-2">
            <RightArrow />
            <div className="text-2xl">{props.description}</div>
        </div>
    </>
}