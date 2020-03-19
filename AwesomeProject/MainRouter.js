import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import reducer from './reduxFolder/ReducerJS';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';

import WebScreen from './screens/web_tab/WebScreen';
import ImageScreen from './screens/image_tab/ImageScreen';
import BlogScreen from './screens/blog_tab/BlogScreen';
import CafeScreen from './screens/cafe_tab/CafeScreen';
import MainScreen from './screens/main_tab/MainScreen';
import CheckListScreen from './screens/checklist_screen/CheckListScreen';

const Tab = createBottomTabNavigator();
const store = createStore(combineReducers({state: reducer}));

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="MyMenu"
        component={MainScreen}
        options={{title: 'MY메뉴'}}
      />
      <MainStack.Screen
        name="CheckList"
        component={CheckListScreen}
        options={{
          title: '체크리스트',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <MainStack.Screen
        name="CafeScreen"
        component={CafeScreen}
        options={{
          title: '체크리스트',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </MainStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Web') {
            iconName = 'web';
          } else if (route.name === 'Image') {
            iconName = 'image';
          } else if (route.name === 'Blog') {
            iconName = 'blogger';
          } else if (route.name === 'Cafe') {
            iconName = 'coffee';
          } else if (route.name === 'Home') {
            iconName = 'home';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={MainStackScreen} />
      <Tab.Screen name="Web" component={WebScreen} />
      <Tab.Screen name="Image" component={ImageScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Cafe" component={CafeScreen} />
    </Tab.Navigator>
  );
}

console.log('State = ', store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
