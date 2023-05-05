import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import styles from "./style";
import useStore from "../../hooks/userInfo";
const ResultPage = ({ navigation, route }) => {
  const { result, selectedboxs } = route.params;
  const {
    user: { age },
  } = useStore();

  const [resultReview, setResultReview] = useState({
    visual: {
      status: false,
      text: "",
    },
    audio: {
      status: false,
      text: "",
    },
    sensual: {
      status: false,
      text: "",
    },
  });

  const MIN_AGE_FOR_ADVANCED_REVIEW = 8;
  const SCORE_FOR_SMALLER_AGE = 5;
  const MIN_SCORE_FOR_MILD_DIFFICULTY = 19;
  const MAX_SCORE_FOR_MODERATE_DIFFICULTY = 34;
  const MAX_SCORE_FOR_SEVERE_DIFFICULTY = 48;

  const calcEasy = (score) => {
    if (score <= SCORE_FOR_SMALLER_AGE) {
      return "لا يعاني من صعوبات في هذه المهارة";
    } else {
      return "يعاني صعوبات في هذه المهارة";
    }
  };

  const calcDifficulty = (score) => {
    if (score <= MIN_SCORE_FOR_MILD_DIFFICULTY) {
      return "لا يعاني من صعوبات في هذه المهارة";
    } else if (score <= MAX_SCORE_FOR_MODERATE_DIFFICULTY) {
      return "يعاني صعوبات خفيقة في هذه المهارة";
    } else if (score <= MAX_SCORE_FOR_SEVERE_DIFFICULTY) {
      return "يعاني من صعوبات متوسطة في هذه المهارة";
    } else {
      return "يعاني من صعوبات شديدة في هذه المهارة";
    }
  };

  const calcResult = () => {
    let visual = {};
    let audio = {};
    let sensual = {};

    if (age <= MIN_AGE_FOR_ADVANCED_REVIEW) {
      visual.status = result.visual > SCORE_FOR_SMALLER_AGE;
      visual.text = calcEasy(result.visual);
      audio.status = result.audio > SCORE_FOR_SMALLER_AGE;
      audio.text = calcEasy(result.audio);
      sensual.status = result.sensual > SCORE_FOR_SMALLER_AGE;
      sensual.text = calcEasy(result.sensual);
    } else {
      visual.status = result.visual > MIN_SCORE_FOR_MILD_DIFFICULTY;
      visual.text = calcDifficulty(result.visual);
      audio.status = result.audio > MIN_SCORE_FOR_MILD_DIFFICULTY;
      audio.text = calcDifficulty(result.audio);
      sensual.status = result.sensual > MIN_SCORE_FOR_MILD_DIFFICULTY;
      sensual.text = calcDifficulty(result.sensual);
    }

    setResultReview({ visual, audio, sensual });
  };

  useEffect(() => {
    calcResult();
  }, []);

  // [0-19.2, 19.2-34.4, 35-48, 49-80]
  // % [0-24, 24-43, 44-60, 61-100]

  const nextHandler = () => {
    navigation.navigate("diagnosis-start", {
      selectedboxs: selectedboxs,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        بناء علي الاجابات السابقة فان نتيجة التشخيص الخاص بطفلك
      </Text>
      <View style={styles.center}>
        <View style={styles.box}>
          {selectedboxs.includes("visual") && (
            <View style={styles.row}>
              <View style={styles.textContent}>
                <Text style={styles.text}>
                  بالنسبة لمهارة الادراك البصري يبدو أن الطفل :
                  <Text
                    style={
                      resultReview?.visual.status
                        ? { color: "red" }
                        : { color: "green" }
                    }
                  >
                    {resultReview?.visual.text}
                  </Text>
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/perception.png")}
                style={styles.icon}
              />
            </View>
          )}
          {selectedboxs.includes("audio") && (
            <View style={styles.row}>
              <View style={styles.textContent}>
                <Text style={styles.text}>
                  بالنسبة لمهارة الادراك السمعي يبدو أن الطفل :
                  <Text
                    style={
                      resultReview?.audio.status
                        ? { color: "red" }
                        : { color: "green" }
                    }
                  >
                    {resultReview?.audio.text}
                  </Text>
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/ear.png")}
                style={styles.icon}
              />
            </View>
          )}
          {selectedboxs.includes("sensual") && (
            <View style={styles.row}>
              <View style={styles.textContent}>
                <Text style={styles.text}>
                  بالنسبة لمهارة الادراك الحس حركي يبدو أن الطفل :
                  <Text
                    style={
                      resultReview?.sensual.status
                        ? { color: "red" }
                        : { color: "green" }
                    }
                  >
                    {resultReview?.sensual.text}
                  </Text>
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/exercise.png")}
                style={styles.icon}
              />
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={nextHandler}>
        <Text style={styles.buttonText}>الاستمرار</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultPage;
