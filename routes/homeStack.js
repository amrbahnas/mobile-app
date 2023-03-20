import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Welcome from "../screens/Welcome/Welcome";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";

const screens = {
  welcome: {
    screen: Welcome,
  },
  login: {
    screen: Login,
  },
  signup: {
    screen: Signup,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: null,
  },
});

export default createAppContainer(HomeStack);
