import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseOperation from "../screens/Choose-operation/ChooseOperation";
import ChoosePerception from "../screens/Choose-perception/ChoosePerception";
import DiagnosisStart from "../screens/Diagnosis_start/DiagnosisStart";
import Questions from "../screens/Questions/Questions";
import ResultPage from "../screens/Result-page/ResultPage";
import LoadingPage from "../screens/Loading-page/LoadingPage";
import ChooseTraining from "../screens/Choose-Training/ChooseTraining";
import MaharaLevels from "../screens/Mahara-Levels/MaharaLevels";
import Trainig from "../screens/Training/Training";
import TrainingResult from "../screens/Training-result/TrainingResult";

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
      <Stack.Screen
        name="result-page"
        component={ResultPage}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="loading-page"
        component={LoadingPage}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="choose-training"
        component={ChooseTraining}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="mahara-levels"
        component={MaharaLevels}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="trainig"
        component={Trainig}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="training-result"
        component={TrainingResult}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default UserPages;
