import * as React from "react";
import { Icon } from "react-native-elements";
import {NavigationContainer}  from "@react-navigation/native"
import {createBottomTabNavigator}  from "@react-navigation/bottom-tabs"
import {createStackNavigator}  from "@react-navigation/stack"
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import RestaurantsScreen from "../screens/Restaurants"
import TopRestaurantsScreen from "../screens/TopRestaurants"
import MyAccountsScreen from "../screens/Acounts/MyAccounts"
import UserGuestScreen from "../screens/Acounts/UserGuest";
import LoginScreen from "../screens/Login"
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function  RestaurantsStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Restaurantes" component={RestaurantsScreen}/>
        </Stack.Navigator>
    )
}
function  TopRestaurantsStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Top 5" component={TopRestaurantsScreen}/>
        </Stack.Navigator>
    )
}
function  MyAccountsStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="My Accounts" component={MyAccountsScreen}/>
        </Stack.Navigator>
    )
}

function MainTabNavigation() {
    return (

        <Tab.Navigator         initialRouteName="My Accounts"  activeColor="#f0edf6"
                               inactiveColor="#3e2465"
                               barStyle={{ backgroundColor: '#694fad' }}
        >

            <Tab.Screen
                name="Top Restaurantes" component={TopRestaurantsStack} options=
                {{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    )

                }}
            />
            <Tab.Screen
                name="Restaurantes" component={RestaurantsStack} options=
                {{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    )

                }}
            />
            <Tab.Screen
                name="My Accounts" component={MyAccountsStack} options=
                {{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    )

                }}
            />


        </Tab.Navigator>
    );
}
