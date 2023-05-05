import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  title: {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    fontSize: 21,
    top: "10%",
  },
  center: {
    minHeight: "40%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  box: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#95959580",
    borderRadius: 5,
    marginVertical: 45,
    backgroundColor: "#fff",
  },
  row: {
    // flex: 1,
    minHeight: 110,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#95959580",
  },
  textContent: {
    flex: 1,
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  icon: {
    width: 30,
    height: 30,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#14bbff",
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
