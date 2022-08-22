import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

class Characters extends Component{
    constructor(){
        super();

        this.state = {
            information: [],
            desplegado: false
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then( response => response.json() )
        .then( data => {
            let charactersArray = data.results;
            let moreCharacters = data.

            this.setState({
                information: charactersArray
            })

            
        })
        .catch( error =>	console.log('El error fue: ' + error))
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
        return(
            <section>
                <section className='cardContainer'>
                {this.state.information.length === 0 ? 
                    <h3>Cargando...</h3> :
                    <div>
                        {
                            this.state.information.map((character, i) => {  
                                return <CharacterCard key={character.id + i} name={character.name} image={character.image} species={character.species} status={character.status} origin={character.origin}/>
                            })
                        }
                    </div>
                }
                </section>
                {this.state.desplegado ? 
                <div>
                    <p>INFORMACION API</p>
                    <p onClick={() => this.ocultar()}>Ver menos</p>
                </div>
                :
                <div>
                    <button onClick={() => this.desplegar()}>More characters</button>
                </div>
                }

            </section>
            
        )        
    }
}

export default Characters;