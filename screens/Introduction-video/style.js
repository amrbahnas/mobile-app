import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  videoContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    top: "80%",
    right: 4,
    zIndex: 99,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#fff",
  },
});
