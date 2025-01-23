import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

type DownloadPictureProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const DownloadPicture: React.FC<DownloadPictureProps> = ({ isOpen, onClose }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Define snap points for the bottom sheet
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Handle changes in the bottom sheet state
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

    // Close the bottom sheet if the user swipes it down
    if (index === -1) {
      onClose();
    }
  }, [onClose]);

  // Control the bottom sheet based on `isOpen` prop
  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.expand(); // Open the bottom sheet
    } else {
      bottomSheetRef.current?.close(); // Close the bottom sheet
    }
  }, [isOpen]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true} // Allow swipe-to-close
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
