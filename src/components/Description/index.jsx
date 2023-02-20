import { useParams } from "react-router-dom";
import "../../styles/logement.css";
import "../../styles/description.css";
import Tags from "../../components/Tags";
import JSONLogement from "../../JSON/Logement.json";

function Description () {
const idLogement = useParams();
console.log(idLogement.id);
const monLogement = JSONLogement.find((element)=> element.id === idLogement.id);
console.log(monLogement);
const logtitle = monLogement.title;
const loglocate = monLogement.location;
return (
    <div className="pagedescription">
            <div className="flat">
                <div className="title"><h1> { logtitle }</h1></div> 
                <div className="location"><p > { loglocate }</p></div>
                <Tags/>
            </div>
    </div> 
)
}

export default Description ;