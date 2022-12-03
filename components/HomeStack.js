import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Header from '../shared/Header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Home'  />
      }
    },
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: 'mintcream', height: 60 },
  }
});

export default HomeStack;