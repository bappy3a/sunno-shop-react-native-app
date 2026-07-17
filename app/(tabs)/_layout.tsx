import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';

const TabLayout = () => {

    return (
        <NativeTabs tintColor="#3C5A5D">
            <NativeTabs.Trigger name="index">
                <Label>Home</Label>
                <Icon sf={{
                    default: 'house',
                    selected: 'house.fill',
                }} drawable="custom_android_drawable" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="wishlist">
                <Label>Wishlist</Label>
                <Icon sf={{
                    default: 'heart',
                    selected: 'heart.fill',
                }} drawable="custom_android_drawable" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="cart">
                <Label>Cart</Label>
                <Icon sf={{
                    default: 'cart',
                    selected: 'cart.fill',
                }} drawable="custom_android_drawable" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="message">
                <Label>Message</Label>
                <Icon sf={{
                    default: 'message',
                    selected: 'message.fill',
                }} drawable="custom_android_drawable" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="account">
                <Label>Account</Label>
                <Icon sf={{
                    default: 'person',
                    selected: 'person.fill',
                }} drawable="custom_android_drawable" />
            </NativeTabs.Trigger>

        </NativeTabs>
    )
}

export default TabLayout