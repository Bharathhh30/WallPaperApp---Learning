// https://ideogram.ai/assets/image/lossless/response/yW3o0cH5RXmVQidfOM-jBA  -- square
// https://ideogram.ai/assets/progressive-image/balanced/response/qsypaQtWQOiL6b4OA67jUA
// https://ideogram.ai/assets/image/lossless/response/h5llb1nMR3eCDY4sAmZV7g

import { DownloadPicture } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallPapers, WallPaper } from "@/hooks/useWallPapers";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Text, View ,StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function explore(){
    const wallpapers = useWallPapers()
    const [selectedWallPaper, setSelectedWallPaper] = useState<null | WallPaper>(null)
    return <SafeAreaView style={{flex:1}}>
            <ParallaxScrollView headerBackgroundColor={{dark: "black" ,light: "white"}} 
            headerImage={<Image style={{flex:1}} source={{
                uri: wallpapers[0]?.url ?? ""
            }}  />}>
                {/* <Text>explore page</Text> */}
                <View style={styles.container}>
                    
                    <View style={styles.innerContainer}>
                    <FlatList 
                        data={wallpapers.filter((_,index) => index%2==0)}
                        renderItem={({item})=> <View style={styles.imageContainer}> <ImageCard wallpaper={item} onPress={()=> {
                            setSelectedWallPaper(item)

                        }}/> </View>}
                        keyExtractor={item=>item.name}
                    />
                    </View>
                    <View style={styles.innerContainer}>
                    <FlatList 
                        data={wallpapers.filter((_,index) => index%2==1)}
                        renderItem={({item})=> <View style={styles.imageContainer}> <ImageCard wallpaper={item} onPress={()=>{
                            setSelectedWallPaper(item)
                        }}/> </View>}
                        keyExtractor={item=>item.name}
                    />
                    </View>
                </View>
            </ParallaxScrollView>
            {selectedWallPaper && <DownloadPicture wallpaper={selectedWallPaper} onClose={()=>{
                setSelectedWallPaper(null)
            }}/>}
    </SafeAreaView>
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:10
    },
    imageContainer:{
        padding:10
    }
})