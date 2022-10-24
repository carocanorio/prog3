import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {db,auth} from '../firebase/config';

const styles = StyleSheet.create({
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
    field: {
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor:'grey',
        color: 'white',
        borderRadius: 25,
        margin: 5
    },
})

class PostForm extends Component{

    constructor(){
        super();
        this.state ={
            post: '',
            likeQuantity: 0
        }
    }

    onSubmit(){

        db.collection('postsTest').add({
            owner: auth.currentUser.email,
            createdAt: Date.now(),
            post: this.state.post,
            likes: []
        })
        .then(() => this.props.navigation.navigate('ProductAll'))
        .catch( e => console.log(e))
    }

    render(){
        return(
            <View> 
                <Text style={styles.title}>Upload a post</Text>
                <TextInput style={styles.field} 
                    keyboardType='default'
                    placeholder='Write whatever you want'
                    onChangeText={ text => this.setState({post:text}) }
                    value={this.state.post} />
                <TouchableOpacity onPress={() => this.onSubmit()}>
                    <Text style={styles.button}> Send </Text> 
                </TouchableOpacity> 
            </View>

        )
    }       

}

export default PostForm