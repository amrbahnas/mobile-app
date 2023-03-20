import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// firebase
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
//components
import NavHeader from "../../components/NavHeader.js";
// formik
import { Formik } from "formik";
import { SignupSchema } from "../../utils/formSchema";
// style
import styles from "./style.js";
export default Signup = ({ navigation }) => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Welcome");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignup = (values) => {
    const { email, password } = values;
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setloading(false);

        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => {
        setloading(false);
        alert(error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>لنبدا</Text>
        </View>
        <Formik
          style={styles.formContainer}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            handleSignup(values);
          }}
        >
          {(props) => (
            <>
              <View style={styles.nameContainer}>
                <View style={styles.nameInputContainer}>
                  <TextInput
                    style={[styles.inputField, styles.lastNameInput]}
                    placeholder="الاسم الأخير"
                    onChangeText={props.handleChange("lastName")}
                    onBlur={props.handleBlur("lastName")}
                    value={props.values.lastName}
                  />
                  <Text style={styles.errorText}>
                    {props.touched.lastName && props.errors.lastName}
                  </Text>
                </View>
                <View style={styles.nameInputContainer}>
                  <TextInput
                    style={[styles.inputField, styles.firstNameInput]}
                    placeholder="الاسم الأول"
                    onChangeText={props.handleChange("firstName")}
                    onBlur={props.handleBlur("firstName")}
                    value={props.values.firstName}
                  />
                  <Text style={styles.errorText}>
                    {props.touched.firstName && props.errors.firstName}
                  </Text>
                </View>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.inputField}
                  placeholder="البريد الإلكتروني"
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  value={props.values.email}
                />
                <Text style={styles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.inputField}
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
              <View style={styles.input}>
                <TextInput
                  style={styles.inputField}
                  secureTextEntry
                  placeholder="تأكيد كلمة المرور"
                  onChangeText={props.handleChange("repeatPassword")}
                  onBlur={props.handleBlur("repeatPassword")}
                  value={props.values.repeatPassword}
                />
                <Text style={styles.errorText}>
                  {props.touched.repeatPassword && props.errors.repeatPassword}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>
                  {loading ? "انتظر من فضلك" : " انشاء حساب جديد"}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <View>
          <Text style={styles.footerText}>انشاء حساب جديد بواسطة</Text>
          <View style={styles.socialLoginContainer}>
            <Text style={styles.socialLoginText}>goole</Text>
            <Text style={styles.socialLoginText}>facebook</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                قم بتسجيل الدخول
              </Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>لديك حساب بالفعل؟</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
