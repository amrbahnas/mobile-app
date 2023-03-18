import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: "",
      headerStyle: { backgroundColor: "#eee" },
    },
  },
  Welcome: {
    screen: Welcome,
  },
  Signup: {
    screen: Signup,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default createAppContainer(HomeStack);
