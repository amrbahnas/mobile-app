import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
// icons
import Icon from "react-native-vector-icons/FontAwesome";
// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
// formik
import { Formik } from "formik";
import { loginSchema } from "../../utils/formSchema";
// global state
import useStore from "../../hooks/userInfo";
// styles
import styles from "./style.js";
export default Login = ({ navigation }) => {
  const { setUser } = useStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = ({ email, password }) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then((doc) => {
          setUser(doc.data());
          setLoading(false);
          navigation.navigate("choose-operation");
        });
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.includes("user-not-found"))
          Alert.alert("خطأ", "تأكد من  البريد الالكتروني");
        else if (error.message.includes("wrong-password"))
          Alert.alert("خطأ", "تأكد من الرقم السري");
        else if (error.message.includes("too-many-requests"))
          Alert.alert(
            "تم الحظر",
            "لقد ادخل كلمة المرور اكتر من مرة يمكنك استعاده كلمه السر للدخول"
          );
        else Alert.alert("خطأ", error.message);
      });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Formik
          style={styles.formContainer}
          initialValues={{
            email: "qq@gmail.com",
            password: "123123123",
          }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            handleLogin(values);
          }}
        >
          {(props) => (
            <>
              <View style={{ width: "100%", marginBottom: 10 }}>
                <TextInput
                  style={styles.input}
                  placeholder="البريد الإلكتروني"
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  value={props.values.email}
                  textAlign="right" // set text alignment to right
                  writingDirection="rtl"
                />
                <Text style={styles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>
              </View>
              <View style={{ width: "100%", marginBottom: 10 }}>
                <TextInput
                  style={[styles.input, styles.inputPassword]}
                  secureTextEntry={!showPassword}
                  placeholder="كلمة المرور"
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password}
                  textAlign="right" // set text alignment to right
                  writingDirection="rtl"
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={handlePasswordVisibility}
                >
                  <Icon
                    name={showPassword ? "eye-slash" : "eye"}
                    size={20}
                    color="#999"
                  />
                </TouchableOpacity>
                <Text style={styles.errorText}>
                  {props.touched.password && props.errors.password}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>
                  {loading ? "جاري الدخول" : " تسجيل الدخول"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.newAcc,
                  loading && styles.disabledButton,
                ]}
                onPress={() => navigation.navigate("signup")}
                disabled={loading}
              >
                <Text style={[styles.buttonText, styles.newAcc]}>
                  حساب جديد
                </Text>
              </TouchableOpacity>
              <View style={styles.forgotPassword}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("forgot-password")}
                >
                  <Text style={styles.forgotPasswordText}>
                    هل نسيت كلمة السر؟
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
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
    </TouchableWithoutFeedback>
  );
};
