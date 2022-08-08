import React from "react";

function Characters({character_name, description, image}) { //Puedo hacer en vez de props, {nombre, avatar,rol} y aclaro que propiedades espera recibir//
    
    return (
        <div className="character-card">
          <img src={image} alt={character_name} />
          <h4>{character_name}</h4>
          <p>{description}</p>
          <a href="https://www.google.com.ar/?hl=es">Ver más</a>
      </div>    
    );
};

export default Characters;