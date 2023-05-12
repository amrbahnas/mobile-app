import React from "react";

import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./style";
export default Welcome = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

// add user name to user collection
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fffdff",
  },
});



// IntroductionVideo reset navigate


    navigation.reset({
      index: 0,
      routes: [{ name: "drawer-pages" }],
    });


      useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
    });
  }, [navigation]);






  //  eas build -p android --profile preview
// expo start --tunnel



 const data= {
  visual: {
    finished :5,
    result : [20,30],
    total: 19,
  },
  auditory: {
     finished :0,
    result : [],
    total: 19,
  },
  ear :{
     finished :0,
    result : [],
    total: 19,
  },
 }