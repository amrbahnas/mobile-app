import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import historyStore from "../../hooks/userHistory";
import userInfo from "../../hooks/userInfo";
// firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
const TrainingResult = ({ navigation, route }) => {
  const { trainingHistory, setTrainingHistory } = historyStore();
  const {
    user: { id },
  } = userInfo();
  const { result, selectedLevel } = route.params;
  let level = selectedLevel;

  useEffect(() => {
    if (level === trainingHistory.visual.finished) {
      const trainningResults = trainingHistory.visual.result;
      trainningResults.push(result);
      const newHistory = {
        ...trainingHistory,
        visual: {
          ...trainingHistory.visual,
          result: trainningResults,
          finished: level + 1,
        },
      };
      console.log(newHistory);
      const docRef = doc(db, "trainingHistory", id);
      updateDoc(docRef, newHistory).then(() => {
        setTrainingHistory(newHistory);
      });
    } else {
      const trainningResults = trainingHistory.visual.result;
      trainningResults[level - 1] = result;
      const newHistory = {
        ...trainingHistory,
        visual: {
          ...trainingHistory.visual,
          result: trainningResults,
        },
      };

      console.log(newHistory);
      const docRef = doc(db, "trainingHistory", id);
      updateDoc(docRef, newHistory).then(() => {
        setTrainingHistory(newHistory);
      });
    }
  }, []);

  const image =
    result > 50
      ? require("../../assets/images/love.png")
      : result <= 50 && result >= 35
      ? require("../../assets/images/happy.png")
      : require("../../assets/images/sad.png");
  const handleClick = () => {
    navigation.navigate("choose-operation");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={image} style={{ width: 200, height: 200 }} />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
          Training Result
        </Text>
        <Text style={{ fontSize: 36, fontWeight: "bold", marginTop: 40 }}>
          {result}%
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>الاستمرار</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrainingResult;
styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },

  wrapper: {
    marginTop: -100,
    marginBottom: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#14bbff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3, // add shadow on Android
    shadowColor: "#000", // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
