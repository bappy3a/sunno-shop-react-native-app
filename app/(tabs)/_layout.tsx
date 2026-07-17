import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { colors, components } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabBar = components.tabBar;

const TabLayout = () => {

    const insets = useSafeAreaInsets();

    const TabIcon = ({ focused, iconName, icon }: { focused: boolean, iconName: any, icon: string }) => {
        const IconComponent = icon === 'Feather' ? Feather : FontAwesome5;
        const iconSize = icon === 'Feather' ? 24 : 24;

        return (
            <View className={`h-11 w-11 flex items-center justify-center rounded-full ${focused ? 'bg-surface' : ''}`}>
                <IconComponent
                    name={iconName}
                    size={iconSize}
                    color={focused ? colors.primary : "rgba(255, 255, 255, 0.5)"}
                />
            </View>
        );
    }

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: insets.bottom > 0 ? insets.bottom - 12 : 8,
                height: tabBar.height,
                marginHorizontal: tabBar.horizontalInset,
                borderRadius: tabBar.radius,
                backgroundColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarItemStyle: {
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarIconStyle: {
                width: tabBar.iconFrame,
                height: tabBar.iconFrame,
                justifyContent: 'center',
                alignItems: 'center',
            }
        }}>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="home" icon="Feather" />) }} />
            <Tabs.Screen name="wishlist" options={{ title: "Wishlist", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="heart" icon="Feather" />) }} />
            <Tabs.Screen name="cart" options={{ title: "Cart", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="shopping-cart" icon="Feather" />) }} />
            <Tabs.Screen name="message" options={{ title: "Message", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="message-square" icon="Feather" />) }} />
            <Tabs.Screen name="account" options={{ title: "Account", tabBarIcon: ({ focused }) => (<TabIcon focused={focused} iconName="user-circle" icon="FontAwesome5" />) }} />
        </Tabs>
    )
}

export default TabLayout