import { Text, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome/Welcome";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import SignupContinue from "./screens/Signup-continue/SignupContinue";
import ForgotPassword from "./screens/Forgot-password/ForgotPassword";
import LoadingPage from "./screens/Loading-page/LoadingPage";
import ChooseOperation from "./screens/Choose-operation/ChooseOperation";
import Home from "./screens/Home/Home";
import ChoosePerception from "./screens/Choose-perception/ChoosePerception";
import DiagnosisStart from "./screens/Diagnosis_start/DiagnosisStart";
import Questions from "./screens/Questions/Questions";
import IntroductionVideo from "./screens/Introduction-video/IntroductionVideo";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="welcome">
          <Drawer.Screen name="welcome" component={Welcome} />
          <Drawer.Screen name="login" component={Login} />
        </Drawer.Navigator>
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

          <Stack.Screen name="loading-page" component={LoadingPage} />
          <Stack.Screen
            name="choose-operation"
            component={ChooseOperation}
            options={() => ({
              headerRight: () => <></>,
              headerLeft: () => <></>,
            })}
          />
          <Stack.Screen
            name="choose-perception"
            component={ChoosePerception}
            options={() => ({
              headerRight: () => <></>,
              headerLeft: () => <></>,
            })}
          />
          <Stack.Screen
            name="diagnosis-start"
            component={DiagnosisStart}
            options={() => ({
              headerRight: () => <></>,
              headerLeft: () => <></>,
            })}
          />
          <Stack.Screen
            name="questions"
            component={Questions}
            options={() => ({
              headerRight: () => <></>,
              headerLeft: () => <></>,
            })}
          />
          <Stack.Screen
            name="introduction-video"
            component={IntroductionVideo}
            options={() => ({
              headerRight: () => <></>,
              headerLeft: () => <></>,
            })}
          />
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  navTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
