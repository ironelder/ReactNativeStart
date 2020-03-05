import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WebScreen from './screens/web_tab/WebScreen';
import ImageScreen from './screens/image_tab/ImageScreen';
import BlogScreen from './screens/blog_tab/BlogScreen';
import CafeScreen from './screens/cafe_tab/CafeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Web') {
            iconName = 'web';
          } else if (route.name === 'Image') {
            iconName = 'image';
          } else if (route.name === 'Blog') {
            iconName = 'blogger';
          } else if (route.name === 'Cafe') {
            iconName = 'coffee';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Web" component={WebScreen} />
      <Tab.Screen name="Image" component={ImageScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Cafe" component={CafeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}