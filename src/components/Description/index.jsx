import { useParams } from "react-router-dom";
import "../../styles/logement.css";
import "../../styles/description.css"
import Tags from "../../components/Tags";


import JSONLogement from "../../JSON/Logement.json";

function Description () {
const idLogement = useParams();
console.log(idLogement.id);
const monLogement = JSONLogement.find((element)=> element.id === idLogement.id);
console.log(monLogement);
return (
    <div className="pagedescription">
            <div className="flat">
                <div className="title"><h1> { monLogement.title }</h1></div> 
                <div className="location"><p > { monLogement.location }</p></div>
                <ul className="tag-box">
            {monLogement.tags.map((tag) => (
                
                <li className="tag" key={tag}>{tag}</li>
                
            ))
            
            }
            
        </ul>
            </div>
    </div> 
)
}

export default Description ;