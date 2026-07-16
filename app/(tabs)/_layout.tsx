import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const TabLayout = () => {
    const TabIcon = ({ focused, iconName, icon }: { focused: boolean, iconName: any, icon: string }) => {
        if (icon === 'Feather') {
            return (
                <View className={`h-10 w-10 flex items-center justify-center rounded-full ${focused ? 'bg-red-100' : ''
                    }`}>
                    <Feather name={iconName} size={24} color={focused ? "black" : "gray"} />
                </View>
            );
        } else {
            return (
                <View>
                    <FontAwesome5 name={iconName} size={24} color={focused ? "black" : "gray"} />
                </View>
            );
        }

    }

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="home" icon="Feather" />) }} />
            <Tabs.Screen name="wishlist" options={{ title: "Wishlist", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="heart" icon="Feather" />) }} />
            <Tabs.Screen name="cart" options={{ title: "Cart", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="shopping-cart" icon="Feather" />) }} />
            <Tabs.Screen name="message" options={{ title: "Message", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="message-square" icon="Feather" />) }} />
            <Tabs.Screen name="account" options={{ title: "Account", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="user-circle" icon="FontAwesome5" />) }} />
        </Tabs>
    )
}

export default TabLayout