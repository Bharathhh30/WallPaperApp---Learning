import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text,Image, StyleSheet, Button, useColorScheme, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { WallPaper } from '@/hooks/useWallPapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

export  const DownloadPicture = ({onClose,wallpaper} : {
  onClose : () => void;
  wallpaper : WallPaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'light'

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["95%"]}
        enablePanDownToClose = {true}
        handleIndicatorStyle = {{display:'none'}} // this will hide the indicator (top lo unna  notch )
        handleStyle = {{display:'none'}}
      >
        <BottomSheetView style={styles.contentContainer}>
          {/* <Text>Awesome 🎉</Text> */}
          <Image style={styles.image} source={{uri: wallpaper.url}}  />
          <View style={styles.topbar}>
            <Ionicons
              name = {'close'}
              size={24}
              color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            />
              <View style={styles.topbarInner}>
                <Ionicons
                  name = {'share'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                  style = {{paddingRight:10}}
                />
                <Ionicons
                  name = {'heart'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                />
              </View>
          </View>
          <View style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </View>
          {/* <Button title="Download" ></Button> */}
          <DownloadButton/>
        </BottomSheetView>
      </BottomSheet>
  );
};


// making the button aesthatic
function DownloadButton(){
  const theme = useColorScheme() ?? 'light'

  return <Pressable style = {{
    backgroundColor:"black",
    padding:10,
    marginVertical:20,
    marginHorizontal : 40,
    justifyContent:"center",
    flexDirection:"row",
    borderRadius:10


  }}>
      <Ionicons
                  name = {'download-outline'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                  style = {{paddingRight:10}}
                />
      <Text style={{
        fontSize:20,
        color : "white",
        fontWeight:"600",
      }}>Download</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image:{
    height:'80%',
    borderRadius:15
  },
  topbar:{
    position:'absolute',
    padding:10,
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    width:'100%'
  },
  topbarInner :{
    display:'flex',
    flexDirection:'row',
  },
  textContainer:{
    justifyContent:"center",
    display:'flex',
    width:"100%",
  },
  text:{
    textAlign:"center",
    marginTop:20,
    fontSize:20,
    fontWeight:"600"
  }

});

