import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Start from "./screens/Start";
import Settings from "./screens/Settings";
import Verification from "./screens/Verification";



const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Start">
        <Stack.Screen  name="Start" component={Start}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Verification" component={Verification}/>
     </Stack.Navigator>
  )
}

export default MainStack
