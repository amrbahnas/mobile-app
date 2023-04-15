import React from "react";

import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./style";
export default DiagnosisStart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>سيبدأ التشخيص الأن</Text>
      <Image
        source={require("../../assets/images/to-do.png")}
        style={styles.image}
      />
      <Text style={styles.body}>
        ستظهر أمامك مجموعة من البنود في كل بند عليك بتحديد مدي انطباق تلك البنود
        علي طفلك سواء كان البند ينطبق دائما او غالبا او احيانا او لايوجد{" "}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>بدأ</Text>
      </TouchableOpacity>
    </View>
  );
};
