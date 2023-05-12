import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Text } from "react-native-paper";
import styles from "./style";
import { data, sessions } from "./data";
import historyStore from "../../hooks/userHistory";

const MaharaLevels = ({ navigation, route }) => {
  const {
    trainingHistory: { visual },
  } = historyStore();

  const smallArrays = [];

  for (let i = 0; i < data.length; i += 5) {
    const open = i < visual.finished * 5;
    smallArrays.push({ data: data.slice(i, i + 5), open });
  }
  console.log(visual);
  const [selectedLevel, setSelectedLevel] = useState(visual?.finished || 1);

  const nextHandler = () => {
    navigation.navigate("trainig", {
      data: smallArrays[selectedLevel - 1].data,
      selectedLevel,
    });

    // if (selectedBox) {
    //   const selectedBoxs = [selectedBox];
    //   navigation.navigate("diagnosis-start", {
    //     selectedBoxs: selectedBoxs,
    //   });
    // }
  };

  const Level = ({ title, level, number }) => {
    const open = level.open;
    return (
      <TouchableOpacity
        onPress={() => setSelectedLevel(number)}
        disabled={!open}
        style={[
          styles.level,
          !open ? styles.disabled : null,
          selectedLevel === number ? styles.selected : "",
        ]}
      >
        <Image
          source={
            open
              ? require("../../assets/icons/open.png")
              : require("../../assets/icons/close.png")
          }
          style={styles.icon}
        />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image source={require("../../assets/icons/perception.png")} />
          <Text style={styles.title}>تدريبات الادراك البصري</Text>
        </View>
        <View style={styles.box}>
          <ScrollView>
            {smallArrays?.map((level, index) => (
              <Level
                title={sessions[index]}
                level={level}
                number={index + 1}
                key={index}
              />
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.button} onPress={nextHandler}>
          <Text style={styles.buttonText}>الاستمرار</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MaharaLevels;
