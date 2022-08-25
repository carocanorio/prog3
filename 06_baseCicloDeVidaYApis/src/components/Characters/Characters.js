import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

class Characters extends Component{
    constructor(){
        super();

        this.state = {
            information: [],
            desplegado: false,
            nextURL: ''
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then( response => response.json() )
        .then( data => {
            let charactersArray = data.results;

            this.setState({
                information: charactersArray,
                nextURL: data.info.next
            })

            
        })
        .catch( error =>	console.log('El error fue: ' + error))
    }

    desplegar(){
        
        fetch(this.state.nextURL)
        .then( response => response.json() )
        .then( data => this.setState(
            {
                information: data.results.concat(this.state.information),
                nextURL: data.info.next,
            }
        ))
        .catch( error =>	console.log('El error fue: ' + error))
    }

    borrar(id){
        let personajesFiltrados = this.state.information.filter(unPersonaje => unPersonaje.id !== id); //mira personaje por personaje,
        //y la condicion a cumplir para quedarte con el elemento es que el id del perosnaje que estas mirando sea disnito al id del parametro. 
        this.setState({
         information: personajesFiltrados
        })
     }


    render(){
        return(
            <section>
                <section className='cardContainer'>
                    {this.state.information.length === 0 ? 
                        <h3>Cargando...</h3> :
                        <div>
                            {
                                this.state.information.map((character, i) => <CharacterCard key={character.id + i} allData={character} name={character.name} image={character.image} species={character.species} status={character.status} origin={character.origin} borrar={(id)=>this.borrar(id)} />)
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