import React, {Component} from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const list = [
    {
       id: 1,
       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {
       id: 2,
       title: "Mens Casual Premium Slim Fit T-Shirts",
    },
    {
       id: 3,
       title: "Mens Cotton Jacket",
    },  
    {
       id: 4,
       title: "Mens Casual Slim Fit",
    },
    {
       id: 5,
       title: "White Gold Plated Princess",
    },  
    {
       id: 7,
       title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    },  
    {
       id: 8,
       title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    },  
    {
       id: 9,
       title: "Solid Gold Petite Micropave",
    },  
    {
       id: 10,
       title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    },
]

const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        flex: 1
    },
    mainTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 40,
        textAlign: 'center'
    },
    itemsTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 6,
    },
    container:{
        padding: 20
    }
})
  
class ProductList extends Component{

    constructor(){
        super();
        this.state ={
            list: list
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Product list</Text>

                {this.state.list.length === 0 ?
                    <ActivityIndicator size='large' color='green' />
                    :
                    <FlatList style={styles.flatlist}
                        data={this.state.list}
                        keyExtractor={ item => item.id.toString()}
                        renderItem={({item}) => <Text style={styles.itemsTitle}>{item.title}</Text>}
                    />
                }
            </View>
        )
    }
}

export default ProductList