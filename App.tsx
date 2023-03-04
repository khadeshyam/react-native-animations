import { View, Text } from 'react-native'
import React from 'react';
import SpringAnimation from './src/components/Animations';

const App = () => {
  return (
    <View style={{ flex: 1,backgroundColor:'skyblue' }}>
      <SpringAnimation />
    </View>
  )
}

export default App
