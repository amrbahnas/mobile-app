import { useRef } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import useStore from "../../hooks/userInfo";
import styles from "./style";
export default Welcome = ({ navigation }) => {
  const video = useRef(null);
  const handleGetStarted = () => {
    navigation.navigate("login");
  };

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
