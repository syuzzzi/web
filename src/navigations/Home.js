import React,{useContext} from "react";
import {ThemeContext} from 'styled-components/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainPage,Search,Chat, Notifications,Profile} from '../screens';
import {Feather, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';


const Tab=createBottomTabNavigator();

const Home=()=>{
    
    const theme=useContext(ThemeContext);

    return(
        <Tab.Navigator 
        //screenOptions={{headerShown: false,}}
        >
            <Tab.Screen name="Home" component={MainPage} 
            options={{tabBarIcon: ({focused})=>(
                focused ? 
                (<Feather name="home" size={20} color={theme.tabBlue}/>):
                (<MaterialCommunityIcons name="home-variant-outline" size={20} color={theme.grey}/>)
            ),
            }}/>
            <Tab.Screen name="Search" component={Search}
            options={{tabBarIcon: ({focused})=>(
                <Feather 
                    name="search"//수정필요
                    size={20}
                    color={focused ? theme.tabBlue:theme.grey}/>
                ),
            }}/>
            <Tab.Screen name="Chat" component={Chat}
            options={{tabBarIcon: ({focused})=>(
                <MaterialCommunityIcons 
                    name={focused ? 'chat':'chat-outline'}
                    size={20}
                    color={focused ? theme.tabBlue:theme.grey}/>
                ),
            }}/>
            <Tab.Screen name="Notifications" component={Notifications}
            options={{tabBarIcon: ({focused})=>(
                <MaterialIcons 
                    name={focused ? 'notifications':'notifications-none'}
                    size={20}
                    color={focused ? theme.tabBlue:theme.grey}/>
                ),
            }}/>
            <Tab.Screen name="Profile" component={Profile}
            options={{tabBarIcon: ({focused})=>(
                <MaterialIcons 
                    name={focused ? 'person':'person-outline'}
                    size={20}
                    color={focused ? theme.tabBlue:theme.grey}/>
                ),
            }}/>
        </Tab.Navigator>
    );
};

export default Home;