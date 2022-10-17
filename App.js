import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './src/screens/ProductList';
import ProductAll from './src/screens/ProductAll';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginForm} />
        <Stack.Screen name='Register' component={RegisterForm}/>
        <Stack.Screen name ='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='ProductList' component={ProductList} />
        <Stack.Screen name='ProductAll' component={ProductAll} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

