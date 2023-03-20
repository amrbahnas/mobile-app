import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// firebase
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
// formik
import { Formik } from "formik";
import { loginSchema } from "../../utils/formSchema";
// components
import CheckBox from "react-native-check-box";
// styles
import styles from "./style.js";
export default Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // navigation.navigate("Welcome");
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
        alert(error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>مرحبًا بعودك</Text>
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
                />
                <Text style={styles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>
              </View>
              <View style={{ width: "100%", marginBottom: 10 }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="كلمة المرور"
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password}
                />
                <Text style={styles.errorText}>
                  {props.touched.password && props.errors.password}
                </Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() => console.log("Forgot password")}
                >
                  <Text style={styles.forgotPasswordText}>
                    هل نسيت كلمة السر؟
                  </Text>
                </TouchableOpacity>
                <CheckBox
                  style={styles.checkbox}
                  onClick={() => {
                    setRememberMe(!rememberMe);
                  }}
                  isChecked={rememberMe}
                  leftText={"تذكرني في المرة القادمة"}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>
                  {loading ? "جاري الدخول" : " تسجيل الدخول"}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <Text style={{ color: "#364458" }}>تسجيل الدخول بواسطة</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={{ marginHorizontal: 20 }}
            onPress={() => console.log("Facebook login")}
          >
            <MaterialIcons name="facebook" size={45} color="#3397f5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Google login")}>
            <Ionicons name="logo-google" size={45} color="green" />
          </TouchableOpacity>
        </View>

        <View style={styles.createAccountText}>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              قم بالتسجيل الآن
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "black" }}>اليس لديك حساب؟</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
