
import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { Tabs } from './src/navigator/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  )
}

export default App;
