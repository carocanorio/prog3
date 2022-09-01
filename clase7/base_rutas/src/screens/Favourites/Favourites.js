import React, {Component} from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

class Favourites extends Component{

    constructor(){
        super();
        this.state = {
            characters: [],
        }
    }

    render(){
        return(
            <section className='cardContainer'>
                <h2>Favourites</h2>
                    { 
                        this.state.personajes.map( (unPersonaje, idx) => <CharacterCard key={unPersonaje.name+idx} datosPersonaje={unPersonaje} />)
                    }
            </section>

        )
    }
}

export default Favourites