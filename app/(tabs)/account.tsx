// import React, { useState } from 'react';
// import { Button, Text, View, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { DownloadPicture } from '@/components/BottomSheet'; // Adjust import path

// export default function Account() {
//   const [isPictureOpen, setIsPictureOpen] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Account Page</Text>
//       <Button title="Open Bottom Sheet" onPress={() => setIsPictureOpen(true)} />
//         {/* console.log("isOpen in patent", isPictureOpen); */}
//       <DownloadPicture isOpen={isPictureOpen} onClose={() => setIsPictureOpen(false)} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TabOneScreen() {
	const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
      <View>
        <Text>Account page</Text>
      </View>
      <View style={styles.container}>
			<BottomSheet index={1} snapPoints={snapPoints}>
				<View style={styles.contentContainer}>
					<Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
				</View>
			</BottomSheet>
		</View>
    </GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center'
	},
	containerHeadline: {
		fontSize: 24,
		fontWeight: '600',
		padding: 20
	}
});