import React, {Component} from 'react';

class OneCharacter extends Component{
    constructor(props){
        super(props)
        this.state={
           information: [],

        }
    };


    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        .then( response => response.json() )
        .then( oneCharacter => this.setState({
            information: oneCharacter.results
        }) )
        .catch( error =>	console.log('El error fue: ' + error))

    }

    render(){
        console.log(this.state.information)
        return(
            <section>
                <p>Datos del personaje: {this.state.information.name}</p>
            </section>
        )
    }

}


export default OneCharacter;
