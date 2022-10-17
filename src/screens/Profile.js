import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    title:{
        fontSize: 50,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 25,
        fontWeight: 'bold'
    }
})

class Profile extends Component{

    constructor(){
        super();
        this.state ={
        }
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Your profile</Text>
            </View>
        )

    }
}

export default Profile