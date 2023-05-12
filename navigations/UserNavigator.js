import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import UserPages from "./userPages";
import DrawerContent from "../components/DrawerContent";
import ProfilePage from "../screens/Profile/Profile";
const UserNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerPosition: "right",
          headerTitle: "",
          headerLeft: false,
          headerRight: () => <DrawerToggleButton />,
          headerStyle: {
            shadowColor: "transparent", // add shadow on iOS
            backgroundColor: "transparent",
          },
          // headerShown: false,
          drawerActiveBackgroundColor: "transparent",
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
            title: "",
            // drawerIcon: ({ focused, color, size }) => {
            //   return <Entypo name="home" size={24} color={color} />;
            // },
          }}
        />
        <Drawer.Screen
          name="profile"
          component={ProfilePage}
          options={{
            title: "",
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default UserNavigator;
