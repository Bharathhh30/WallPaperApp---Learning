import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DownloadPicture } from '@/components/BottomSheet'

export default function account () {
	const [pictureOpen, setPictureOpen] = React.useState(false)
  return (
	<SafeAreaView style = {{flex:1}}>
		<View style = {{flex:1}}>
			<Text>Accont</Text>
			<Button title = 'open bottom sheet' onPress={() => {
				setPictureOpen(true)
			}}></Button>
			{pictureOpen && <DownloadPicture onClose={()=>setPictureOpen(false)}/>}
		</View>
	</SafeAreaView>
  )
}

// export default account


// add flex:1 to the SafeAreaView 
// add flex:1 to the View so that the view takes the whole screen