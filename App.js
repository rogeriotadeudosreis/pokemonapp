import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListAll from './src/pages/ListAll';
import ListFavorite from './src/pages/ListFavorite';
import Details from './src/pages/Details';
import SearchPokemon from './src/pages/SearchPokemon';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListAll">
          <Stack.Screen
            name="SearchPokemon"
            component={SearchPokemon}
            options={{headerShown: true}}
          />
          
          <Stack.Screen
            name="ListAll"
            component={ListAll}
            options={{headerShown: true}} 
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: true}}
          />
          
          <Stack.Screen
            name="ListFavorite"
            component={ListFavorite}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
