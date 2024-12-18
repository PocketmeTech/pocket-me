
export const Term = (props) => {
    return <>
        <div className="font-bold text-xl border-b-2 border-[#6D8DC7] mt-6">{props.title}</div>
        <br />
        <div className="text-justify">
            {props.children}
        </div>
    </>
}