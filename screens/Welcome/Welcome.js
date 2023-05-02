import { useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";

import styles from "./style";
export default Welcome = ({ navigation }) => {
  const video = useRef(null);
  const handleGetStarted = () => {
    navigation.navigate("login");
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigation.navigate("home");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          source={require("../../assets/videos/welcome.mp4")}
          style={styles.video}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
          onLoad={() => {
            video.current.playAsync();
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>استمرار</Text>
      </TouchableOpacity>
    </View>
  );
};
