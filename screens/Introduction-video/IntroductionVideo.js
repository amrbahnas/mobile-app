import { useState, useRef } from "react";

import * as ScreenOrientation from "expo-screen-orientation";
import { Video, ResizeMode } from "expo-av";

import { Button, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
export default IntroductionVideo = ({ navigation }) => {
  let fullScreen = true;
  let count = 0;
  const video = useRef(null);
  const handleClick = () => {
    navigation.navigate("drawer-pages");
  };
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          source={require("../../assets/videos/adrak.mp4")}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
          onLoad={() => {
            video.current.playAsync();
          }}
          // onReadyForDisplay={() => {
          //   if (fullScreen && count !== 0) {
          //     ScreenOrientation.lockAsync(
          //       ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
          //     );
          //     fullScreen = false;
          //   } else {
          //     ScreenOrientation.lockAsync(
          //       ScreenOrientation.OrientationLock.PORTRAIT
          //     );
          //     count = 1;
          //     fullScreen = true;
          //   }
          // }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>استمرار</Text>
      </TouchableOpacity>
    </View>
  );
};
