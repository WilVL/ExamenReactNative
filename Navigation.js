import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


//Screens
import StackScreens from "./Pantallas/StackScreens";

//Pantallas
import BotonesScreen from "./Pantallas/Botones";
import ImagenesScreen from "./Pantallas/Imagenes";
import VideoScreen from "./Pantallas/Video";


//Iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStacks() {
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="BotonesScreen"
        >
           <HomeStackNavigator.Screen
                name="Examen"
                component={ImagenesScreen}
           
           />
           <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreens}
                options={{
                    headerBackTitleVisible: false,
                }}

           /> 
        </HomeStackNavigator.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Imagen"
            screenOptions={{
              tabBarActiveTintColor: 'blue'  
            }}
        >
            <Tab.Screen 
            name="Imagen" 
            component={MyStacks}
            options={{
                tabBarLabel: 'Imagenes y texto',
                tabBarIcon: ({color, size}) => (
                    <Entypo name="images" size={30} color="black" />
                ),
               headerShown: false,
            }}
            />
            <Tab.Screen 
            name="Botones" 
            component={BotonesScreen}
            options={{
                tabBarLabel: 'Botones',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="gesture-tap-button" size={30} color="black" />
                ),            
                headerShown: false,
            }}
            />

            <Tab.Screen 
            name="Video" 
            component={VideoScreen}
            options={{
                tabBarLabel: 'Video',
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="video-library" size={30} color="black" />
                ),
                headerShown: false,
            }}
            />

        </Tab.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>

    );
}