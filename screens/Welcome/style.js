import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14bbff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  image: {
    width: 392,
    height: 392,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3, // add shadow on Android
    shadowColor: '#000', // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14bbff",
  },
});
