
export const ContactCard = (props) => {
    return <>
        <div className="bg-[#6D8DC7] px-4 py-2  rounded-xl text-white w-full md:w-72 flex items-center gap-4">
            {props.icon}            
            <div className="w-full text-center">
                {props.label} : {props.value}
            </div>
        </div>
    </>
}