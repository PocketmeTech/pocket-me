import { useRecoilValue } from "recoil";
import Card from "./Card";
import { cardAtom } from "../atoms/cards";

function WhyPocketme(){
    const cards = useRecoilValue(cardAtom);
    return (
    <div>
        <div className="px-10 md:px-20 my-20">
            <div className="text-center my-5 text-3xl font-bold">
                Why Pocketme
            </div>
            <img className="mx-auto mb-10" src="../src/assets/images/heading-line-dec.png" alt="" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                {cards.map((item,idx) => (
                    <Card key={idx} url={item.url} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default WhyPocketme;