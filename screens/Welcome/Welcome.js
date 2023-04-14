import React,{useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Text, TouchableOpacity, View ,Image} from "react-native";
import styles from "./style";
export default Welcome = ({ navigation }) => {
  const handleGetStarted = () => {
    // Handle button press to navigate to next screen
    navigation.navigate("login");
  };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate("home");
        }
      });
      return unsubscribe;
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ايدراك</Text>
      <Image
        source={require("../../assets/images/welcome-logo.png")}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>استمرار</Text>
      </TouchableOpacity>
    </View>
  );
};
