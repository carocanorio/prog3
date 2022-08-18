import React, { Component } from "react";

class Characters extends Component { //Puedo hacer en vez de props, {nombre, avatar,rol} y aclaro que propiedades espera recibir//
    
    constructor(props){
      super(props);

      this.state = {
        character_name: props.character_name,
        description: props.description,
        image: props.image
      }
    }

    render(){
      return (
        <div className="character-card">
          <img src={"../img/" + this.state.image} alt={this.state.character_name} />
          <h4>{this.state.character_name}</h4>
          <p>{this.state.description}</p>
          <a href="https://www.google.com.ar/?hl=es">Ver más</a>
      </div>
      );
    }
};

export default Characters;