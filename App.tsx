import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {StackNavigator} from './src/navigator/StackNavigator';

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
