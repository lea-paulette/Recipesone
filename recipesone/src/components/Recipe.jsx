import React from 'react'
import '../App'

const Recipe = ({photo}) => {
    console.log(photo)
    return(
        <div className="blockRecipe">
        <div className="blockCard">
         <img className="image" src={photo.photo}></img>
         <div className="blockInfos">
         <h3>{photo.titre}</h3>
         <div>{photo.description}</div>
         <div>{photo.personnes} personnes</div>
         <div>{photo.tempsPreparation} min</div>
         <h4>Niveau {photo.niveau}</h4>
         </div>
        </div>
        <br/>
         <div>{photo.ingredients}</div>
         <br/>
         <div>{photo.etapes}</div>
         <br/>
         </div>
    );

};
export default Recipe