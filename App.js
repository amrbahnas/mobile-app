import { Text, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome/Welcome";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import SignupContinue from "./screens/Signup-continue/SignupContinue";
import ForgotPassword from "./screens/Forgot-password/ForgotPassword";
import LoadingPage from "./screens/Loading-page/LoadingPage";
import IntroductionVideo from "./screens/Introduction-video/IntroductionVideo";
import DrawerPages from "./navigations/DrawerPages";
import modelStore from "./hooks/model";
import Loading from "./components/Loading";
export default function App() {
  const Stack = createNativeStackNavigator();
  const { isOpen } = modelStore();
  return (
    <PaperProvider>
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
          <Stack.Screen
            name="drawer-pages"
            component={DrawerPages}
            options={() => ({
              headerRight: () => <></>,
              headerLeft: () => <></>,
            })}
          />
        </Stack.Navigator>
        {isOpen && <Loading />}
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
