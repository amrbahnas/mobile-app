import React from "react";

import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./style";
export default DiagnosisStart = ({ navigation, route }) => {
  const { selectedboxs } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>سيبدأ التشخيص الأن</Text>
      </View>
      <Image
        source={require("../../assets/images/to-do.png")}
        style={styles.image}
      />
      <Text style={styles.body}>
        ستظهر أمامك مجموعة من البنود في كل بند عليك بتحديد مدي انطباق تلك البنود
        علي طفلك سواء كان البند ينطبق دائما او غالبا او احيانا او لايوجد{" "}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("questions", { selectedboxs });
        }}
      >
        <Text style={styles.buttonText}>بدأ</Text>
      </TouchableOpacity>
    </View>
  );
};
