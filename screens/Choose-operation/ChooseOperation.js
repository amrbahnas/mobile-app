import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./style";
const ChooseOperation = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const perceptionTypeTitles = {
    0: "اختر الصعوبات الإدراكية التي تواجه الطفل ",
    1: "اختر المهارة التي تريد  تنميتها ",
    2: "تم اعداد برنامجك بناء علي اخر تشخيص هل تود تغير شئ ؟",
  };
  const images = [
    {
      source: require("../../assets/images/doctor.png"),
      label: "لنبدا التشخيص",
    },
    {
      source: require("../../assets/images/training.png"),
      label: "لنبدا التمرين",
    },
    {
      source: require("../../assets/images/analysis.png"),
      label: "رؤية المعدل",
    },
  ];

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const navigateHandler = () => {
    navigation.navigate("choose-perception", {
      title: perceptionTypeTitles[currentIndex],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Swiper
          showsButtons={false}
          loop={false}
          onIndexChanged={onIndexChanged}
          paginationStyle={styles.pagination}
          activeDotColor="#14bbff"
        >
          {images.map((item, index) => (
            <View key={index} style={styles.slide}>
              <Image style={styles.image} source={item.source} />
            </View>
          ))}
        </Swiper>
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateHandler}>
        <Text style={styles.buttonText}>{images[currentIndex]?.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseOperation;
