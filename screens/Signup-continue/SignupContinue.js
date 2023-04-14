import React, { useState, useEffect } from "react";
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
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
const SignupContinue = ({ navigation, route }) => {
  const [loading, setloading] = useState(false);
  const [gender, setGender] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  const [selectedAge, setselectedAge] = useState(null);
  const [age, setage] = useState([
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSelection = (selectedGender) => {
    setGender(selectedGender);
    console.log(selectedGender);
  };

  const handleSubmit = () => {
    if (gender && selectedAge) {
      setloading(true);
      const { email, password } = route.params;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setloading(false);
          const user = userCredentials.user;
          navigation.navigate("home");
        })
        .catch((error) => {
          setloading(false);
          alert(error.message);
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
              right: 300,
            }}
            listItemLabelStyle={{
              width: "100%",
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "برجاء الانتظار" : " انشاء حساب جديد"}
          </Text>
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
