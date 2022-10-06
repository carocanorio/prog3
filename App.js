import {View } from 'react-native';
import ProductList from './src/screens/ProductList';
import ProductAll from './src/screens/ProductAll';

export default function App() {
  return (
    <View>
      <ProductList />
      <ProductAll />
    </View>
  );
}

