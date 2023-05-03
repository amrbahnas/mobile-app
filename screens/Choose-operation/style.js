import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  slider: {
    height: 400,
    marginBottom: 30,
    marginTop: 100,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  pagination: {
    marginBottom: -35,
  },
  button: {
    backgroundColor: "#14bbff",
    borderRadius: 30,
    padding: 15,
    elevation: 3, // add shadow on Android
    shadowColor: "#000", // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
