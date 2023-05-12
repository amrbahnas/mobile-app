import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import styles from "./style";
const ChoosePerception = ({ navigation, route }) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const { title } = route.params;
  const handleCheck1 = () => setIsChecked1(!isChecked1);
  const handleCheck2 = () => setIsChecked2(!isChecked2);
  const handleCheck3 = () => setIsChecked3(!isChecked3);

  const handleRowPress = (index) => {
    if (index === 1) {
      setIsChecked1(!isChecked1);
    } else if (index === 2) {
      setIsChecked2(!isChecked2);
    } else if (index === 3) {
      setIsChecked3(!isChecked3);
    }
  };

  const nextHandler = () => {
    if (isChecked1 || isChecked2 || isChecked3) {
      const selectedboxs = [];
      if (isChecked1) selectedboxs.push("visual");
      if (isChecked2) selectedboxs.push("audio");
      if (isChecked3) selectedboxs.push("sensual");
      navigation.navigate("diagnosis-start", {
        selectedboxs: selectedboxs,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => handleRowPress(1)}
            style={styles.row}
          >
            <Checkbox.Android
              status={isChecked1 ? "checked" : "unchecked"}
              onPress={handleCheck1}
              color="#14bbff"
            />
            <View style={styles.rightContent}>
              <Text style={styles.text}>صعوبة الإدراك البصري</Text>
              <Image
                source={require("../../assets/icons/perception.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleRowPress(2)}
            style={styles.row}
          >
            <Checkbox.Android
              status={isChecked2 ? "checked" : "unchecked"}
              onPress={handleCheck2}
              color="#14bbff"
            />
            <View style={styles.rightContent}>
              <Text style={styles.text}>صعوبة الإدراك السمعي</Text>
              <Image
                source={require("../../assets/icons/ear.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleRowPress(3)}
            style={styles.row}
          >
            <Checkbox.Android
              status={isChecked3 ? "checked" : "unchecked"}
              onPress={handleCheck3}
              color="#14bbff"
            />
            <View style={styles.rightContent}>
              <Text style={styles.text}>صعوبة الإدراك الحس حركي</Text>
              <Image
                source={require("../../assets/icons/exercise.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={nextHandler}>
          <Text style={styles.buttonText}>الاستمرار</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChoosePerception;
