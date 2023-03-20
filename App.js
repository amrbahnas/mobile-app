import Navigator from "./routes/homeStack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome/Welcome";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import NavHeader from "./components/NavHeader";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => {
            return <></>;
          },
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={({ navigation, route }) => ({
            headerRight: () => <NavHeader navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
