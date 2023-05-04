import { Text, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome/Welcome";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";
import SignupContinue from "../screens/Signup-continue/SignupContinue";
import ForgotPassword from "../screens/Forgot-password/ForgotPassword";
import LoadingPage from "../screens/Loading-page/LoadingPage";
import IntroductionVideo from "../screens/Introduction-video/IntroductionVideo";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
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
          headerRight: () => <Text style={styles.navTitle}>تسجيل الدخول</Text>,
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
          headerLeft: () => <></>,
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

      <Stack.Screen
        name="loading-page"
        component={LoadingPage}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="introduction-video"
        component={IntroductionVideo}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
const styles = StyleSheet.create({
  navTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
