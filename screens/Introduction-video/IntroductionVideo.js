import { useEffect, useRef } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { Video, ResizeMode } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
export default IntroductionVideo = () => {
  const video = useRef(null);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
    });
  }, [navigation]);
  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }, []);

  const handleClick = () => {
    video.current.pauseAsync();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "drawer-pages" }],
    // });
    // navigation.reset({
    //   routes: [{ name: "drawer-pages" }],
    // });
    // navigation.navigate("drawer-pages");

    navigation.reset({
      index: 0,
      routes: [
        {
          name: "drawer-pages",
          state: {
            type: "drawer",
            routes: [{ name: "drawer-pages" }], // Replace 'Home' with the name of the screen to navigate to
          },
        },
      ],
    });
  };
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={require("../../assets/videos/adrak.mp4")}
        style={styles.video}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false}
        onLoad={() => {
          video.current.playAsync();
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>تخطي</Text>
        <MaterialIcons name="navigate-next" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
