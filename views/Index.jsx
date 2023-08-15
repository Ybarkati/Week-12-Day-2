import React from "react";

export default function Index({pokemon}){
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
    return(
        <div style={myStyle}>
          <h1 >See All The Pokemon!</h1>
          <ul>
              {pokemon.map((poke,index)=>(
                <a href={`/pokemon/${index}`} style={{color:"white",textDecoration:"none"}}><li> {poke.name[0].toUpperCase()+poke.name.slice(1)}</li></a>
                
              ))}
          </ul>
        </div>
    )
}