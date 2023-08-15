import React from "react";

export default function Show({pokemon}){
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
    return(
        <div style={myStyle}>
          <h1 >Gotta Catch 'Em All</h1>
          <h2>{pokemon.name}</h2>
          <img src={`${pokemon.img}.jpg`} alt="" /><br /><br />
          <a href="/pokemon" style={{color:"aqua"}}>Back</a>
        </div>
    )
}