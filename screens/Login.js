// import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Welcome");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل دخول </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{loading ? "loading" : "Login"}</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={[styles.linkText, styles.signupLink]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#ff6b6b",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  linkContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: "#333",
  },
  signupLink: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#ff6b6b",
  },
});
