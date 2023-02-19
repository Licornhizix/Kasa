import { useParams } from "react-router-dom";
import fullstar from "../../assets/fullstar.png";
import emptystar from "../../assets/emptystar.png";
import JSONrate from "../../JSON/Logement.json"
import "../../styles/rate.css";



const Rate = () =>  {
const idLogement = useParams();
console.log(idLogement.id);
const monLogement = JSONrate.find((element)=> element.id === idLogement.id);
console.log(monLogement);
const lograte = monLogement.rating;
const stars = [];
// Boucle pour créer le nombre d'étoiles en fonction du score
for (let i = 1; i <= 5; i++) {
    let starImage = i <= lograte ? fullstar : emptystar;
    stars.push(
      <img key={i} src={starImage} alt="star" />
    );
  }

  return <div className="rate">{stars}</div>;
};

export default Rate