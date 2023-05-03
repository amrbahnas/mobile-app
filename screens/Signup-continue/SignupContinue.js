import React, { useState } from "react";
import styles from "./style";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
// firebase
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
// global state
import useStore from "../../hooks/userInfo";
import modelStore from "../../hooks/model";

const SignupContinue = ({ navigation, route }) => {
  const { setUser } = useStore();
  const { setIsOpen } = modelStore();

  const { id } = route.params;
  const [gender, setGender] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  const [selectedAge, setselectedAge] = useState(null);
  const age = [
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
  ];

  const handleSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleSubmit = () => {
    if (gender && selectedAge) {
      setIsOpen();
      const userData = {
        gender,
        age: selectedAge,
      };
      const docRef = doc(db, "users", id);
      updateDoc(docRef, userData).then(() => {
        getDoc(docRef).then((doc) => {
          setIsOpen();
          setUser(doc.data());
          navigation.navigate("loading-page", {
            text: " جاري اعداد حسابك",
            target: "introduction-video",
          });
        });
      });
    } else {
      Alert.alert("خطأ", "قم بملي البيانات المطلوبة");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>تحديد الجنس</Text>
        <View style={styles.gender}>
          <TouchableOpacity
            onPress={() => handleSelection("male")}
            style={[styles.box, gender === "male" && styles.selectedBox]}
          >
            <ImageBackground
              source={require("../../assets/images/male.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelection("female")}
            style={[styles.box, gender === "female" && styles.selectedBox]}
          >
            <ImageBackground
              source={require("../../assets/images/female.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>تحديد العمر</Text>
        <View style={styles.dropdownGender}>
          <DropDownPicker
            items={age}
            open={isOpen}
            setOpen={() => setisOpen(!isOpen)}
            value={selectedAge}
            setValue={(value) => setselectedAge(value)}
            // dropDownMaxHeight={150}
            maxHeight={200}
            placeholder="اختر العمر"
            placeholderStyle={{ fontSize: 15, textAlign: "center" }}
            showTickIcon={false}
            closeOnBackPressed={true}
            // disableBorderRadius={false}
            style={{
              backgroundColor: "#d9d9d9",
              borderWidth: 0,
              zIndex: 100,
            }}
            dropDownContainerStyle={{
              borderWidth: 0,
              elevation: 4,
              shadowColor: "#000",
            }}
            textStyle={{
              fontSize: 18,
            }}
            arrowIconStyle={{
              position: "absolute",
              width: 20,
              height: 20,
              top: -10,
              right: 280,
            }}
            listItemLabelStyle={{
              // width: "100%",
              textAlign: "right",
            }}
            selectedItemContainerStyle={{
              backgroundColor: "#7636ff",
            }}
            selectedItemLabelStyle={{
              color: "#fff",
            }}
            labelStyle={{
              textAlign: "right",
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>الاستمرار</Text>
        </TouchableOpacity>
        <View style={styles.agreement}>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              textAlign: "center",
            }}
          >
            بالضغط علي زر الدخول , أنت تقبل
            <Text style={styles.highLightText}> بسياية الخصوصية </Text>و
            <Text style={styles.highLightText}> شروط الأستخدام </Text>
            للتطبيق
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignupContinue;
