import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import ImageList from './views/ImageList';
import LogoTitle from './views/LogoTitle';
import ImageContent from './views/ImageContent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ImageList" component={ImageList} options={{ headerTitle: props => <LogoTitle {...props} />, headerTitleAlign: 'center', headerTintColor: '#26CB17' }} />
        <Stack.Screen name="ImageContent" component={ImageContent} options={{ headerTitle: props => <LogoTitle {...props} />, headerTitleAlign: 'center', headerTintColor: '#26CB17' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;