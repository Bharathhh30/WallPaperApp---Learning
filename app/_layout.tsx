import { Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Layout(){
    return (
        <GestureHandlerRootView >
            {/* <StatusBar hidden = {false} /> */}
            <Stack screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name="(nobottombars)/info" options={{headerShown:true,
                    headerTitle: "Account Info",
                    headerBackTitle : "Go Back"}} />
                
            </Stack>
        </GestureHandlerRootView>
    )
}



// wrapped the whole app under the gesture handler root view