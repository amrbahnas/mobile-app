import { useState } from "react";
import styles from "./style";
// firebase
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

const ForgotPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState("");
  const handleOkPress = () => {
    navigation.navigate("login");
  };
  resetPasswordHandler = () => {
    if (email) {
      setLoading(true);
      sendPasswordResetEmail(auth, email)
        .then((task) => {
          setLoading(false);
          Alert.alert(
            "تم الارسال",
            "تم ارسال لينك اعادة تعيين كلمةالمرور انظر صندوق البريد",
            [
              { text: "Cancel", style: "cancel" },
              { text: "OK", onPress: handleOkPress },
            ]
          );
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert("خطأ", "قم بادخال البريد الالكتروني بشكل صحيح");
        });
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>
          قم بادخال بريدك الالكتروني لكي تتمكن من استعادته
        </Text>
        <TextInput
          style={styles.input}
          placeholder="البريد الإلكتروني"
          onChangeText={(value) => setemail(value)}
          value={email}
          textAlign="right"
          writingDirection="rtl"
        />
        <TouchableOpacity style={styles.button} onPress={resetPasswordHandler}>
          <Text style={styles.buttonText}>
            {loading ? "جاري التحميل" : "الاستمرار"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
