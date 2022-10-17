import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet, Button} from 'react-native';
import {auth} from '../firebase/config';

const styles = StyleSheet.create({
    field: {
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor:'grey',
        color: 'white',
        borderRadius: 25,
        margin: 5
    },
    title: {
        fontSize: 50,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 25,
        fontWeight: 'bold'
    },
    button: {
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor:'grey',
        color: 'white',
        borderRadius: 25,
        margin: 5,
        width: '17%',
        marginTop: 15
    },
    error: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        margin: 5
    },
    text: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
    },
})
class RegisterForm extends Component{

    constructor(){
        super();
        this.state ={
            email: '',
            password: '',
            registered: false,
            error: []
        }
    }

    onSubmit(){

        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {this.setState({registered: true})})
        .catch(err => {this.setState({error: err.message})})

    }

    render(){
        return(
            <View> 
                <Text style={styles.title}>Create your account</Text>
                <TextInput style={styles.field} 
                keyboardType='email-address'
                    placeholder='Write your email'
                    onChangeText={ text => this.setState({email:text}) }
                    value={this.state.email} />
                <TextInput style={styles.field} 
                    keyboardType='default'
                    placeholder='Create a password'
                    secureTextEntry={true} 
                    onChangeText={ text => this.setState({password:text}) }
                    value={this.state.password}/> 
                <TouchableOpacity onPress={() => this.onSubmit()}>
                    <Text style={styles.button}> Send </Text> 
                </TouchableOpacity> 
                <Text style={styles.error}>{this.state.error}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.text}>Already have an account? Log in!</Text>
                </TouchableOpacity>

                <Button 
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>

        )
    }       

}

export default RegisterForm