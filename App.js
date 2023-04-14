import Navigator from "./routes/homeStack";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome/Welcome";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import SignupContinue from "./screens/Signup-continue/SignupContinue";
import ForgotPassword from "./screens/Forgot-password/ForgotPassword";
import Home from "./screens/Home/Home";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen
          name="login"
          component={Login}
          options={() => ({
            headerRight: () => (
              <Text style={styles.navTitle}>تسجيل الدخول</Text>
            ),
          })}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={() => ({
            headerRight: () => <Text style={styles.navTitle}>حساب جديد</Text>,
          })}
        />
        <Stack.Screen
          name="signup-continue"
          component={SignupContinue}
          options={() => ({
            headerRight: () => <Text style={styles.navTitle}>حساب جديد</Text>,
          })}
        />
        <Stack.Screen
          name="forgot-password"
          component={ForgotPassword}
          options={() => ({
            headerRight: () => (
              <Text style={styles.navTitle}>نسيت كلمة السر</Text>
            ),
          })}
        />

        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
