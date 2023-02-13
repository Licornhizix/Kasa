import React from "react"
import { useParams } from "react-router-dom";
import JSONLogement from "../../JSON/Logement.json"
import "../../styles/tags.css"

function Tags () {
  const idLogement = useParams();
console.log(idLogement.id);
const monLogement = JSONLogement.find((element)=> element.id === idLogement.id);
console.log(monLogement);
return (
<ul className="tag-box">
{monLogement.tags.map((tag) => (
    
    <li className="tag" key={tag}>{tag}</li>
    
))

}

</ul>
)
    
        
}


export default Tags;