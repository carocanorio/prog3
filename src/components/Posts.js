import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { auth, db} from '../firebase/config';
import firebase from 'firebase';

const styles = StyleSheet.create({
    button: {
        color: 'red',
        fontSize: 25
    },
    text: {
        fontSize: 25,

    }
})

class Posts extends Component{

    constructor(props){
        super(props);
        this.state ={
            text: 'Like',
            liked: this.props.item.data.likes.includes(auth.currentUser.email)
        }
    }

    dislike(){
        db.collection('postsTest')
        .doc(this.props.item.id)
        .update({
                   likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
               })
               .then(()=>{
                    this.setState({liked: false, text: 'Like' })
               })
    }

    like(){
        db.collection('postsTest')
        .doc(this.props.item.id)
        .update({
                   likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
               })
               .then(()=>{
                    this.setState({liked: true, text: 'Dislike' })
               })
    }
        
    render(){
        return(
            <View>
                <Text style={styles.text}>{this.props.item.data.owner}: {this.props.item.data.post}</Text>
                {this.state.liked ?
                    <TouchableOpacity onPress={() => this.dislike()}>
                        <Text style={styles.button}>{this.state.text} </Text> 
                        <Text style={styles.button}>Likes {this.props.item.data.likes.length}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => this.like()}> 
                        <Text style={styles.button}>{this.state.text} </Text> 
                        <Text style={styles.button}>Likes {this.props.item.data.likes.length}</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }

}

export default Posts