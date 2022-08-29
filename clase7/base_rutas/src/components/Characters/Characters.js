import React, {Component} from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import Form from '../Form/Form';
import './characters.css'

class Characters extends Component{
    constructor(){
        super()
        this.state={
            personajesIniciales: [],
            personajes:[], //aparecer personajes
            nextUrl:'',
            userText: '',
        }
    }

    componentDidMount(){
        //BUscamos datos
        fetch('https://rickandmortyapi.com/api/character')
            .then( res => res.json())
            .then( data => this.setState({
                personajesIniciales: data.results,
                personajes: data.results,
                nextUrl: data.info.next
            }))
            .catch()
    }
    
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                personajes: data.results.concat(this.state.personajes),
                nextUrl: data.info.next,
            }))
            .catch()
    }

    borrar(id){
       let personajesFiltrados = this.state.personajes.filter(unPersonaje => unPersonaje.id !== id);
       this.setState({
        personajes: personajesFiltrados
       })
    }

    preventSubmit(e){
        e.preventDefault();
    };
    
    saveChanges(e){
        this.setState({
            userText: e.target.value,
        },
        () => this.filterCharacters()
        );
    };
    
    filterCharacters(){
        let text = this.state.userText.toLowerCase();

        this.setState({
            personajes: this.state.personajesIniciales.filter((criatura) => criatura.name.toLowerCase().includes(text))
        }, console.log(this.state.personajesIniciales))
    };

    searchResults(buscado){
        this.setState({
            personajes: buscado
        })
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={(e) => this.preventSubmit(e)}>
                    <input type='text' onChange={(e) => this.saveChanges(e)} value={this.state.userText} />
                </form>

                <Form buscar={(buscado) => this.searchResults(buscado)}/>
                <button onClick={()=>this.traerMas()}> Traer más </button>
                <section className='cardContainer'>
                    { 
                        this.state.personajes.map( (unPersonaje, idx) => <CharacterCard key={unPersonaje.name+idx} datosPersonaje={unPersonaje} borrar={(id)=>this.borrar(id)}/>)
                    }
                </section>

            </React.Fragment>
        )
    }

}


export default Characters