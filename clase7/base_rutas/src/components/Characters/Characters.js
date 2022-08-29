import React, {Component} from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './characters.css'

class Characters extends Component{
    constructor(){
        super()
        this.state={
            personajes:[], //aparecer personajes
            nextUrl:'',
            information: '',
            filteredCharacters: ''
        }
    }

    componentDidMount(){
        //BUscamos datos
        fetch('https://rickandmortyapi.com/api/character')
            .then( res => res.json())
            .then( data => this.setState({
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
            information: e.target.value,
        },
        () => console.log(this.state.information)
        );
    };
    
    filterCharacters(){
        let characters = this.state.information.toLowerCase()

        this.setState({
            filteredCharacters: characters.filter((person) => person.includes())
        })
    };

    render(){
        console.log(this.state.personajes);
        return(
            <React.Fragment>
                <form onSubmit={(e) => this.preventSubmit(e)}>
                    <input type='text' onChange={(e) => this.saveChanges(e)} value={this.state.information} />
                </form>
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