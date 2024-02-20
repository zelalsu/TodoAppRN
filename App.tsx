import {View, Text} from 'react-native';
import React from 'react';
import MainScreen from './screens/ListScreen';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './screens/Navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
