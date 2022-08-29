import React, { Component } from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            personajes: [],
            userText: '',
        }
    }

    preventSubmit(e){
        e.preventDefault();
        fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.userText}`)
            .then( res => res.json())
            .then( data => this.setState({
                personajes: data.results,
            }, () => this.props.buscar(this.state.personajes))
            )
            .catch()
    };
    
    saveChanges(e){
        this.setState({
            userText: e.target.value,
        },
        () => console.log(this.state.userText)
        );
    };

    render(){

        return(
            <section>
                <form onSubmit={(e) => this.preventSubmit(e)}>
                    <input type='text' onChange={(e) => this.saveChanges(e)} value={this.state.userText} placeholder='Search'/>
                    <button type='search'>Search</button>
                </form>
            </section>

        )
    }
}

export default Form