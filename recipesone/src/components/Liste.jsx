import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";

function Liste(){

const[data, setData]=useState([])   


const getData =()=> {
    axios
    .get('http://localhost:9000/api/recipes')
    .then((response )=> setData(response.data))
    .catch((err)=> console.log(err));
}
    useEffect(()=>{
        getData()
    },[]);

return(
    <>
    {data.map((photo)=>(
    <Card key={photo.id} photo={photo}/>
    ))}
    </>
)

}
export default Liste