import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 75,
    backgroundColor: "#f0f0f0 ",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    direction: "ltr",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ed7820",
    borderRadius: 30,
    padding: 10,
    elevation: 3, // add shadow on Android
    shadowColor: "#000", // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
