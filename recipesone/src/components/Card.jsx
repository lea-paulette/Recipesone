import React from "react";
import {Link} from 'react-router-dom'; 
import '../index.css'

const Card = ({photo}) => {
    console.log(photo)
    return(
        <div className="blockCard">
         <img className="image" src={photo.photo}></img>
         <div className="blockInfos">
         <h3>{photo.titre}</h3>
         <div>{photo.description}</div>
         <div>{photo.personnes} personnes</div>
         <div>{photo.tempsPreparation} min</div>
         <h4>Niveau {photo.niveau}</h4>
         <ul>
         <li><Link to="../Pages/RecipePage" className="">voir</Link></li>
         </ul>
         </div>
        </div>
    );

};

export default Card;