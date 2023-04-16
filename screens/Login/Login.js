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
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
// formik
import { Formik } from "formik";
import { loginSchema } from "../../utils/formSchema";
// styles
import styles from "./style.js";
export default Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("choose-operation");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = ({ email, password }) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setLoading(false);
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.includes("user-not-found"))
          Alert.alert(
            "خطأ",
            "الرجاء التأكد من ادخال البريد الالكتروني والرقم السري صحيحا"
          );
        else Alert.alert("خطأ", "تاكد من الاتصال بالانترنت");
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
            email: "",
            password: "",
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
