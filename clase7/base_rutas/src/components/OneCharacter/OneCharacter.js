import React, {Component} from 'react';
import '../CharacterCard/CharacterCard.css';

class OneCharacter extends Component{
    constructor(props){
        super(props)
        this.state={
           information: {},
           id: Number(props.match.params.id)

        }
    };

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        .then( response => response.json() )
        .then( oneCharacter => this.setState({ information: oneCharacter}) )
        .catch( error =>	console.log('El error fue: ' + error))

    }

    render(){
        console.log(this.state.information)
        return(
            <article className='character-card'>
                <h2>{this.state.information.name}</h2>
                <img src={this.state.information.image} alt={this.state.information.name}/>
                <p>{this.state.information.status}</p>    
                <p>{this.state.information.species}</p>
            </article>
        )
    }

}


export default OneCharacter;
