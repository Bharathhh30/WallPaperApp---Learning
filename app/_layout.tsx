import { Slot } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Layout(){
    return <GestureHandlerRootView>
        <Slot/>
    </GestureHandlerRootView>
}