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
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="choose-perception"
        component={ChoosePerception}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="diagnosis-start"
        component={DiagnosisStart}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="questions"
        component={Questions}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default UserPages;
