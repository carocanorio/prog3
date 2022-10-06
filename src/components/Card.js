import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: 150,
    },
    container:{
        flex: 1,
        padding: 10,
    },
    dataContainer: {
        marginTop: 10,
        textAlign: 'center',
        marginTop: 6,
    },
    dataTitle: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
    },
    dataText: {
        fontSize: 16,
        margin: 10,
        width: '20%',
        alignSelf: 'center'
    }
    
})

class Card extends Component{

    constructor(props){
        super(props);
        this.state ={
            
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataTitle}>{this.props.item.title} </Text>
                    <Image style={styles.image} source={{uri: this.props.item.image}} resizeMode='contain'/>
                    <Text style={styles.dataText}>Price: {this.props.item.price}</Text>
                    <Text style={styles.dataText}>{this.props.item.description}</Text>
                    <Text style={styles.dataText}>Category: {this.props.item.category}</Text>
                </View>
            </View>
        )

    }

}

export default Card