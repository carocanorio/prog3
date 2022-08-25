import React, {Component} from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        // console.log(this.props);
        return(
                <article className='character-card'>
                    <img src={this.props.datosPersonaje.image} alt="" />
                    <Link to={`/characters/id/${this.props.datosPersonaje.id}`}>
                        <h2>{this.props.datosPersonaje.name}</h2> {/* Nombre */}
                    </Link>
                    <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
                    <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
                    <p className='more'>Ver más</p> 
                    <section className='extra'>
                        <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                    </section>
                    <p className='delete' onClick={()=>this.props.borrar(this.props.datosPersonaje.id)}>Borrar</p>
                </article>

        )
    }

}

export default CharacterCard