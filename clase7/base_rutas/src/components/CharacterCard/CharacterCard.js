import React, {Component} from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state={
           favsMessage: 'Add to favourites',
           inFavs: false,
        }
    }

    componentDidMount(){
        let favourites = [];
        let recoverStorage = localStorage.getItem('favourites') //Puede estar vacia

        if(recoverStorage !== null){

            let storageToArray = JSON.parse(recoverStorage) //Transforma string en array
            favourites = storageToArray

            if(favourites.includes(this.props.datosPersonaje.id)){
                this.setState({
                    favsMessage: 'Delete from favourites'
                })
            }
        }
    }

    addAndDeleteFavourites(id){
        //Guardo ids en un array en ls
        console.log('Agregando y sacando favs');

        let favourites = [];
        let recoverStorage = localStorage.getItem('favourites') //Puede estar vacia

        if(recoverStorage !== null){

            let storageToArray = JSON.parse(recoverStorage) //Transforma string en array
            favourites = storageToArray

        }

        if (favourites.includes(id)) { //includes retorna true/false
            
            favourites = favourites.filter(eachId => eachId !== id) //Me quedo con todos menos con el que coincida con el id de favoritos. Cuando coincide, va a dar falso y lo va a sacar
            this.setState({
                favsMessage: 'Add to favourites'
            })
        } else {
            favourites.push(id);
            this.setState({
                favsMessage: 'Delete from favourites'
            })
        }

        let favsToString = JSON.stringify(favourites);
        localStorage.setItem('favourites', favsToString)

        console.log(localStorage);


    }

    render(){
        // console.log(this.props);
        return(
                <article className='character-card'>
                    <img src={this.props.datosPersonaje.image} alt="" />
                    <Link to={`/characters/id/${this.props.datosPersonaje.id}`}>
                        <h2>{this.props.datosPersonaje.name}</h2> {/* Nombre */}
                    </Link>
                    <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
                    <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
                    <p className='more'>Ver más</p> 
                    <section className='extra'>
                        <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                    </section>
                    <p onClick={() => this.addAndDeleteFavourites(this.props.datosPersonaje.id)}>{this.state.favsMessage}</p>
                    <p className='delete' onClick={()=>this.props.borrar(this.props.datosPersonaje.id)}>Borrar</p>
                </article>

        )
    }

}

export default CharacterCard