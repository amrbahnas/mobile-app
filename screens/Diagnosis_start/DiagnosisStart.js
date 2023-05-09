import React from "react";

import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./style";
import useStore from "../../hooks/userInfo";
export default DiagnosisStart = ({ navigation, route }) => {
  const { selectedboxs } = route.params;
  const {
    user: { age },
  } = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تعليمات قبل التشخيص</Text>
      <Image
        source={require("../../assets/images/to-do.png")}
        style={styles.image}
      />
      <View style={styles.noteContainer}>
        <Text style={styles.note}>إستعن بالله</Text>
        <Text style={styles.note}>
          - جاوب بصدق فكلما كنت صادقا كلما كان التشخيص صادقا وحقيقيا
        </Text>
        <Text style={styles.note}>
          - لا تقوم بتصحيح الاجابة للطفل ولا تساعده في تنفيذ المهمه والأخذ
          بالإجابة الاولى دائما
        </Text>
        {age > 8 ? (
          <>
            <Text style={styles.note}>
              - إختر دائما اذا كان ينطبق عليه البند بشكل يومي او مستمر
            </Text>
            <Text style={styles.note}>
              - إختر غالبا إذا كان ينطبق عليه البند أربع مرات في في الأسبوع
            </Text>
            <Text style={styles.note}>
              - إختر أحيانا إذا كان ينطبق البند مرتين او ثلاث في الأسبوع
            </Text>
            <Text style={styles.note}>
              - إختر نادراً إذا كان ينطبق البند مرة تقريبا في الأسبوع
            </Text>
            <Text style={styles.note}>
              - في حالة عدم وجود صعوبة في تطبيق البند إختر لا ينطبق
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.note}>
              - إختر يوجد إذا كان ينطبق علية البند
            </Text>
            <Text style={styles.note}>
              - في حالة عدم وجود صعوبة في تطبيق البند إختر لا يوجد
            </Text>
          </>
        )}
      </View>
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
