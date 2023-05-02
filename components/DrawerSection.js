import * as React from "react";
import { Button, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.getParent("LeftDrawer").openDrawer()}
        title="Open left drawer"
      />
      <Button
        onPress={() => navigation.getParent("RightDrawer").openDrawer()}
        title="Open right drawer"
      />
    </View>
  );
}

function RightDrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the right drawer</Text>
    </View>
  );
}

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: "left" }}
    >
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
}

const RightDrawer = createDrawerNavigator();

export default function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
}
