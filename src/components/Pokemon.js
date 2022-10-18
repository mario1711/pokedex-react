import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props;
    return(
        <div className="pokemon-card">
            <div className="pokemon-name">
                    <span className="pokemon-numero">#{pokemon.id}</span>
                    <h3>{pokemon.name}</h3>
            </div>

            <div className="pokemon-img">
                <img src={pokemon.sprites.front_default}></img>
            </div>

            <div className="pokemon-info">
                <div className="type-container">
                    <h3>
                        Tipo:
                    </h3>
                </div>
                <div className="pokemon-type">
                    {pokemon.types.map((type , idx) =>{
                        return(
                            <div key={idx} className={type.type.name}>
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>

                <div className="pokemon-weakness">
                    
                </div>
            </div>
        </div>
    )
}

export default Pokemon;