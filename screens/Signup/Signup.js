import React, { useState, useEffect } from "react";

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
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
// formik
import { Formik } from "formik";
import { SignupSchema } from "../../utils/formSchema";
// style
import styles from "./style.js";
import modelStore from "../../hooks/model";
import historyStore from "./../../hooks/userHistory";

export default Signup = ({ navigation }) => {
  const { setIsOpen } = modelStore();
  const { setTrainingHistory } = historyStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [loading, setloading] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleSignup = (values) => {
    setloading(true);
    Keyboard.dismiss();
    setIsOpen();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const userData = {
          id: user.uid,
          name: values.name,
          email: values.email,
        };
        setDoc(doc(db, "users", user.uid), userData).then(() => {
          const data = {
            visual: {
              finished: 1,
              result: [],
              total: 19,
            },
            audio: {
              finished: 1,
              result: [],
              total: 19,
            },
            sensual: {
              finished: 1,
              result: [],
              total: 19,
            },
          };
          setDoc(doc(db, "trainingHistory", user.uid), data).then(() => {
            setTrainingHistory(data);
            setloading(false);
            setIsOpen();
            navigation.navigate("signup-continue", {
              id: user.uid,
            });
          });
        });
      })
      .catch((error) => {
        setloading(false);
        setIsOpen();
        if (error.message.includes("email-already-in-use")) {
          Alert.alert("خطأ", "هذا الحساب موجود بالفعل");
        } else if (error.message.includes("invalid-email")) {
          Alert.alert("خطأ", "قم بادخال بريد الالكتروني صالح");
          alert(error.message);
        } else {
          Alert.alert("خطأ", "تاكد من الاتصال بالانترنت");
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: "",
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
              <View style={styles.input}>
                <TextInput
                  textAlign="right" // set text alignment to right
                  writingDirection="rtl"
                  style={[styles.inputField, styles.nameInput]}
                  placeholder="الاسم بالكامل"
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                  value={props.values.name}
                />
                <Text style={styles.errorText}>
                  {props.touched.name && props.errors.name}
                </Text>
              </View>
              <View style={styles.input}>
                <TextInput
                  textAlign="right" // set text alignment to right
                  writingDirection="rtl"
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
                  textAlign="right" // set text alignment to right
                  writingDirection="rtl"
                  style={styles.inputField}
                  secureTextEntry={!showPassword}
                  placeholder="كلمة المرور"
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password}
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
              <View style={styles.input}>
                <TextInput
                  textAlign="right" // set text alignment to right
                  writingDirection="rtl"
                  style={styles.inputField}
                  secureTextEntry={!showRepeatPassword}
                  placeholder="تأكيد كلمة المرور"
                  onChangeText={props.handleChange("repeatPassword")}
                  onBlur={props.handleBlur("repeatPassword")}
                  value={props.values.repeatPassword}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={handleRepeatPasswordVisibility}
                >
                  <Icon
                    name={showRepeatPassword ? "eye-slash" : "eye"}
                    size={20}
                    color="#999"
                  />
                </TouchableOpacity>
                <Text style={styles.errorText}>
                  {props.touched.repeatPassword && props.errors.repeatPassword}
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.submitButton, loading && styles.disabledButton]}
                onPress={props.handleSubmit}
                disabled={loading}
              >
                <Text style={styles.buttonText}>
                  {loading ? "برجاء الانتظار" : " انشاء حساب جديد"}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};
