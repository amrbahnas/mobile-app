import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// icons
import Icon from "react-native-vector-icons/FontAwesome";

// formik
import { Formik } from "formik";
import { SignupSchema } from "../../utils/formSchema";
// style
import styles from "./style.js";
export default Signup = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleSignup = (values) => {
    navigation.navigate("signup-continue", {
      email: values.email,
      password: values.password,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Formik
          style={styles.formContainer}
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
                style={styles.submitButton}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>الاستمرار</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};
