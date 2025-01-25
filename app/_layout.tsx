import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Layout(){
    return (
        <GestureHandlerRootView >
            <Slot/>
        </GestureHandlerRootView>
    )
}



// wrapped the whole app under the gesture handler root view