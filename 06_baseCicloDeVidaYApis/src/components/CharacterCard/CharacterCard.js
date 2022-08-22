import React, { Component } from 'react';
import "../CharacterCard/CharacterCard.css"

class CharacterCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            desplegado: false
        }
    }

    desplegar(){
        this.setState(
            {desplegado: true}
        )
    }

    ocultar(){
        this.setState(
            {desplegado: false}
        )
    }

    render(){
        return (
            <article className='character-card'>
                <img src={this.props.image} alt={this.props.name} />
                <h2>{this.props.name} </h2>
                <p> {this.props.status}</p> 
                <p> {this.props.species}</p> 
                {this.state.desplegado ? 
                    <section className='extra show'>
                        <p>Origen: {this.props.origin.name}</p> 
                        <p className='more' onClick={() => this.ocultar()}>Ver menos</p>
                    </section>
                    :
                    <div>
                        <section className='extra'>
                        <p className='more' onClick={() => this.desplegar()}>Ver más</p> 
                    </section>
                    </div>
                }
                <p className='delete'>Borrar</p>
            </article>
    
        )
    }
}

export default CharacterCard