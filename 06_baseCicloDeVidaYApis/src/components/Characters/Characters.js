import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

class Characters extends Component{
    constructor(){
        super();

        this.state = {
            information: [],
            desplegado: false,
            borrar: []
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then( response => response.json() )
        .then( data => {
            let charactersArray = data.results;

            this.setState({
                information: charactersArray,
            })

            
        })
        .catch( error =>	console.log('El error fue: ' + error))
    }

    desplegar(){
        
        fetch('https://rickandmortyapi.com/api/character/?page=2')
        .then( response => response.json() )
        .then( data => this.setState(
            {
                information: data.results.concat(this.state.information)
            }
        ))
        .catch( error =>	console.log('El error fue: ' + error))
    }


    render(){
        return(
            <section>
                <section className='cardContainer'>
                    {this.state.information.length === 0 ? 
                        <h3>Cargando...</h3> :
                        <div>
                            {
                                this.state.information.map((character, i) => <CharacterCard key={character.id + i} name={character.name} image={character.image} species={character.species} status={character.status} origin={character.origin} />)
                            }
                        </div>
                    }
                </section>
                <button onClick={() => this.desplegar()}>Ver más personajes</button>

            </section>
            
        )        
    }

}
export default Characters;