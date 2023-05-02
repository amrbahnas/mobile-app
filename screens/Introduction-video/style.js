import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  videoContainer: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  video: {
    width: "100%",
    height: "50%",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#7636ff",
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
