import { useParams } from "react-router-dom";
import fullstar from "../../assets/fullstar.png";
import emptystar from "../../assets/emptystar.png";
import JSONrate from "../../JSON/Logement.json"



function Rate() {
	const idLogement = useParams();
console.log(idLogement.id);
const monLogement = JSONrate.find((element)=> element.id === idLogement.id);
console.log(monLogement);
return (
    <div className="pagedescription">
            <div className="flat">
                <div className="title"><h1> { monLogement.rating }</h1></div> 
            </div>
    </div> 
)
	
}

export default Rate