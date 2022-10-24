import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductAll from './ProductAll';
import ProductList from './ProductList';
import Profile from './Profile';
import PostForm from '../components/PostForm';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

class Home extends Component{

    constructor(){
        super();
        this.state ={
        }
    }

    render(){
        return(
                <Tab.Navigator >
                    <Tab.Screen name='All' component={ProductAll}  options={{ tabBarIcon: () => <MaterialCommunityIcons name="home-circle-outline" size={24} color="black" />}} />
                    <Tab.Screen name='List' component={ProductList} options={{ tabBarIcon: () => <Ionicons name="list-circle-outline" size={24} color="black" /> }}/>
                    <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: () => <Ionicons name="person-circle-outline" size={24} color="black" /> }}/>
                    <Tab.Screen name='Upload a post' component={PostForm} options={{ tabBarIcon: () => <AntDesign name="upload" size={24} color="black" />}}/> 
                </Tab.Navigator>
        )
    }
}

export default Home