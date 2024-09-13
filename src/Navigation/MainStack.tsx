
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListScreen from '../Screens/ArticlesScreens/NewsListScreen';
const Stack = createNativeStackNavigator();

export function MainStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsListScreen"
                component={NewsListScreen}
                options={{ title: 'News', headerShown: false }}
            />
        </Stack.Navigator>
    );
}