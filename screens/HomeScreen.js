// HomeScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab'; 
import CartTab from './CartTab'; 
import HelpTab from './HelpTab'; 

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Cart" component={CartTab} />
        <Tab.Screen name="Help" component={HelpTab} />
      </Tab.Navigator>
  );
}

export default HomeScreen;
