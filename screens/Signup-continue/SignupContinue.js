import { useState, useEffect } from "react";
import styles from "./style";
import ageList from "../../utils/age";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
// firebase
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
// global state
import useStore from "../../hooks/userInfo";
import modelStore from "../../hooks/model";
import Dropdown from "../../components/Dropdown";

const SignupContinue = ({ navigation, route }) => {
  const { setUser, setLogin } = useStore();
  const { setIsOpen } = modelStore();
  const { id } = route.params;
  const [gender, setGender] = useState(null);
  const [selectedAge, setselectedAge] = useState("6");

  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
    });
  }, [navigation]);
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
        <Dropdown
          setvalue={(value) => setselectedAge(value)}
          data={ageList}
          value={selectedAge}
        />
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
