import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStack } from './MainStack';

const Stack = createNativeStackNavigator();


export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MainStack"
                    component={MainStack}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}