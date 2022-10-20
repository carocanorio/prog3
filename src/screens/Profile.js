import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {auth, db} from '../firebase/config';

const styles = StyleSheet.create({
    title:{
        fontSize: 50,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 25,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
    },
    logout:{
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 20,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 25,
        width: '30%',
    }
})

class Profile extends Component{

    constructor(){
        super();
        this.state ={
            userData: null,
        }
    }

    componentDidMount(){
        db.collection('userData').onSnapshot(
            docs => {
                docs.forEach( doc => {
                    const data = doc.data();
                    
                    if(data.owner === auth.currentUser.email) {
                        this.setState({
                            userData: data,
                        })
                    }
                })
            }
        )       
    }

    logOut(){
        auth.signOut()
        this.props.navigation.navigate('Login')
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Your profile</Text>
                <Text style={styles.text}>Hey {auth.currentUser.email}!</Text>
                <Text style={styles.text}>Age: {this.state.userData?.age}</Text>
                <Text style={styles.text}>Id number: {this.state.userData?.idNumber}</Text>

                <TouchableOpacity onPress={() => this.logOut()} >
                    <Text style={styles.logout}>Sign out</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

export default Profile