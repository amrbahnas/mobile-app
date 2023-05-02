import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fffdff",
  },
  videoContainer: {
    width: "100%",
    height: "70%",
  },
  video: {
    width: "100%",
    height: 500,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#ed7820",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3, // add shadow on Android
    shadowColor: "#000", // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
