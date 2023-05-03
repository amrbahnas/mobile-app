import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { ProgressBar } from "react-native-paper";

import styles from "./style";
const MyPage = ({ navigation, route }) => {
  const { text, target } = route.params;
  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
    });
  }, [navigation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(target);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require(".../../assets/images/welcome-logo.png")}
            style={styles.image}
          />
          <ProgressBar
            indeterminate
            progress={0.5}
            color="#7636ff"
            style={styles.progressBar}
          />
        </View>
        <Text style={styles.loadingText}>{text}</Text>
      </View>
    </View>
  );
};

export default MyPage;
