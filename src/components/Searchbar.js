import React from "react";
import { searchPokemon } from "../api";
import Pokemon from "./Pokemon";
const {useState} = React;

const Searchbar = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState("");

    const onChange = (e) =>{
        setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
    }

    const onClick = async (e) =>{
        onSearch(search);
    }
    
    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                placeholder="Buscar pokemon..." 
                onChange={onChange}>
                </input>
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>
                    Buscar
                </button>
            </div>
        </div>
    )
}

export default Searchbar;