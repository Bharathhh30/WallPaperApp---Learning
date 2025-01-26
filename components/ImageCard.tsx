import { WallPaper } from "@/hooks/useWallPapers";
import { Image, Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function ImageCard({wallpaper ,onPress}:{
    wallpaper : WallPaper
    onPress : any
}){
    const theme = useColorScheme() ?? "light"
    return <Pressable onPress = {onPress}>
        <View >
            <Image source={{uri:wallpaper.url}} style={styles.image}/>
            <View style={styles.labelContainer}>
                <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
                <View style = {styles.iconContainer}>
                <Ionicons
                    name= {'heart'}
                    size={18}
                    color = {theme === "light" ? Colors.light.icon : Colors.dark.icon}
                />
                </View>
            </View>
        </View>
    </Pressable>
}


const styles = StyleSheet.create({
    iconContainer :{
        display:"flex",
        justifyContent:"center",
    },
    image:{
        flex:1,
        height:200,
        borderRadius:20
    },
    label:{
        
        color:"white",
    },
    labelContainer:{
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0.5)",
        bottom:0,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }
})