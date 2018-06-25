import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Pokedex from './screens/pokedex';

export default createStackNavigator({
  Home: {
    screen: Pokedex,
  },
})
