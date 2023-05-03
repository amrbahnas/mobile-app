import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import UserPages from "./userPages";
import DrawerContent from "./DrawerContent";
const DrawerPages = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitle: "",
        headerStyle: {
          height: 120,
          shadowColor: "transparent", // add shadow on iOS
          backgroundColor: "trnsparent",
        },
        // headerShown: false,
        // drawerActiveBackgroundColor: "#14bbff",
        // drawerActiveTintColor: "white",
        drawerStyle: {
          backgroundColor: "white",
        },
        drawerLabelStyle: {
          //space between icon and text
          marginLeft: -25,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={UserPages}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => {
            return <Entypo name="home" size={24} color={color} />;
          },
        }}
      />
      {/* <Drawer.Screen name="signUp" component={() => {}} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerPages;
