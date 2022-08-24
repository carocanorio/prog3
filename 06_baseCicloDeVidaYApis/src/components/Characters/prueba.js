import React, { Component } from 'react';
import './Character.css';
import CharacterCard from './CharacterCard/CharacterCard';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: [],
            borrar: []
        }
    };

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => this.setState(
                { personajes: data.results }
            ))
            .catch(error => console.log(error))
    }



    render() {

        return (
            <section className='character-card'>
                {this.state.personajes === [] ?
                    <h3>Cargando...</h3> :
                    <div className="cards-container">
                        {this.state.personajes.map(personaje =>
                            <div>
                                {console.log(personaje.id)}
                                <CharacterCard key={personaje.id} name={personaje.name} image={personaje.image} estado={personaje.status} especie={personaje.species} origen={personaje.origin.name} origenUrl={personaje.origin.url} />
                                <p className='delete' onClick={() => {
                                    this.state.borrar.push(personaje.id);
                                    this.setState({
                                        personajes: this.state.personajes.filter(personaje =>
                                            !this.state.borrar.includes(personaje.id)
                                        )
                                    })
                                }}>
                                    Borrar
                                </p>
                            </div>
                        )}
                    </div>
                }
            </section>

        )
    };
};

export default Character;