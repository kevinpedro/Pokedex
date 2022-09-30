import React from 'react';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator, RootStackParams } from './Navigator';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();



export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle = {{
            backgroundColor: 'white'
        }}
        screenOptions = {{
            tabBarActiveTintColor: '#5856D6',
            tabBarLabelStyle: {
                marginBottom: 10
            },
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.65)',
                borderWidth: 0,
                elevation: 0,
            } 
        }}>
      <Tab.Screen 
        name="HomeScreem"
        component={Navigator} 
        options= {{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={25}
                    name= "list-outline" ></Icon>)
        }}/>
      <Tab.Screen
        name="SerchScreen"
        component={Tab2Screen}
        options= {{
            tabBarLabel: 'Listado',
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={25}
                    name= "search-outline" ></Icon>)
        }}/> 
    </Tab.Navigator>
  );
}