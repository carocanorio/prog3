import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {auth} from '../firebase/config';

class LoginForm extends Component{

    constructor(){
        super();
        this.state ={
            allProducts: allProducts
        }
    }

    onSubmit(){

        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {

        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        return(
            <View></View>
        )
    }       

}

export default LoginForm