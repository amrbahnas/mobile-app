import { Text, StyleSheet, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigations/AuthNavigator";
import UserNavigator from "./navigations/UserNavigator";
import modelStore from "./hooks/model";
import Loading from "./components/Loading";
import useStore from "./hooks/userInfo";
export default function App() {
  const { login } = useStore();
  const { isOpen } = modelStore();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <NavigationContainer>
            {login ? <UserNavigator /> : <AuthNavigator />}
            {isOpen && <Loading />}
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
    </>
  );
}
