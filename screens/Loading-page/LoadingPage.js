import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { ProgressBar } from "react-native-paper";

import styles from "./style";
const LoadingPage = ({ navigation, route }) => {
  const { text, target, result, selectedboxs } = route.params;
  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
    });
  }, [navigation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (target === "result-page") {
        navigation.navigate("result-page", { result, selectedboxs });
      } else navigation.navigate(target);
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
            source={require("../../assets/images/welcome-logo.png")}
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

export default LoadingPage;
