
function Card(props){
    return (
        <div className="border-2 rounded-lg rounded-tr-3xl m-1 p-10 shadow-xl md:m-1.5">
            <img className="my-4" src={props.url}/>
            <div className="my-4 font-bold text-2xl min-h-[2.75em]">{props.title}</div>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;