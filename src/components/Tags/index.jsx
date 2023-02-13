//import React from "react"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JSONTags from "../../JSON/Logement.json"
import "../../styles/card.css"

function Tags () {
    const idTag = useParams();
    const tagList = JSONTags.find((element)=> element.id === idTag.id);
    console.log(tagList.tags);
    <ul className="tag-box">
            {tagList.tags.map((tag) => (
                
                <li className="tag" key={tag}>{tag}</li>
                
            ))
            
            }
            
        </ul>
        
}


{/*function Tags () {
const [data, setData] = useState([]);
useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}*/}

export default Tags;