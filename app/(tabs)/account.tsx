import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {DownloadPicture} from "@/components/BottomSheet"


export default function account(){
    const [pictureOpen,setPictureOpen] = useState(false);
    return <SafeAreaView>
        <Text>account page</Text>
        <Button title="Open Bottom sheet" onPress={()=>{
            setPictureOpen(true);
        }} ></Button>
        {pictureOpen && <DownloadPicture/>}
    </SafeAreaView>
}