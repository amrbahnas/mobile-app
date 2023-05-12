import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native-paper";
import styles from "./style";
// firebase
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import useStore from "../../hooks/userInfo";
import historyStore from "../../hooks/userHistory";
const ChooseTraining = ({ navigation, route }) => {
  const { trainingHistory: visual } = historyStore();

  const { setTrainingHistory } = historyStore();
  const {
    user: { id },
  } = useStore();

  useEffect(() => {
    const data = {
      visual: {
        finished: 0,
        result: [],
        total: 19,
      },
      audio: {
        finished: 0,
        result: [],
        total: 19,
      },
      sensual: {
        finished: 0,
        result: [],
        total: 19,
      },
    };
    setDoc(doc(db, "trainingHistory", id), data).then(() => {
      setTrainingHistory(data);
    });
  }, []);

  const [selectedBox, setSelectedBox] = useState("");

  const handleBoxPress = (box) => {
    if (box === selectedBox) {
      setSelectedBox("");
    } else {
      setSelectedBox(box);
    }
  };

  const nextHandler = () => {
    navigation.navigate("mahara-levels");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>اختر المهارة التي تريد تنميتها </Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => handleBoxPress("visual")}
            style={[
              styles.row,
              selectedBox === "visual" ? styles.selectedBox : null,
            ]}
          >
            <View style={styles.rightContent}>
              <Text style={styles.text}>صعوبة الإدراك البصري</Text>
              <Image
                source={require("../../assets/icons/perception.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleBoxPress("audio")}
            style={[
              styles.row,
              selectedBox === "audio" ? styles.selectedBox : null,
            ]}
          >
            <View style={styles.rightContent}>
              <Text style={styles.text}>صعوبة الإدراك السمعي</Text>
              <Image
                source={require("../../assets/icons/ear.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleBoxPress("sensual")}
            style={[
              styles.row,
              selectedBox === "sensual" ? styles.selectedBox : null,
            ]}
          >
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

export default ChooseTraining;
