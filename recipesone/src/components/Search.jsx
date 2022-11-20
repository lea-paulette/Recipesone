import React from "react";
import {useState, useEffect} from "react"
import axios from 'axios';

function Search(){

const [datas, setDatas]= useState([]);
const[searchTerm, setSearchTerm]=useState("");

useEffect(()=>{
    axios
fetch("")
.then((response)=>response.json())
.then((json)=>setDatas(json));
   },  []);

const handleSearchTerm =(e)=>{
    let value = e.target.value;
    setSearchTerm(value);
};

console.log(searchTerm);

    return(
        <div>
<div className="searchBar">
<input 
type="text" 
name="searchBar" 
id="searchBar" 
placeholder="Rechercher"
onChange={(handleSearchTerm)}/>
</div>
<div className="search_results">
    {datas.filter((val)=>{
        return val.title.includes(searchTerm)
    }).map((val)=>{
return <div className="search_result" key={val.id}>{val.title}</div>
    })}
</div>
</div>
    )
}

export default Search