import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseOperation from "../screens/Choose-operation/ChooseOperation";
import ChoosePerception from "../screens/Choose-perception/ChoosePerception";
import DiagnosisStart from "../screens/Diagnosis_start/DiagnosisStart";
import Questions from "../screens/Questions/Questions";
const UserPages = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="choose-operation"
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
      }}
    >
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
    </Stack.Navigator>
  );
};

export default UserPages;
