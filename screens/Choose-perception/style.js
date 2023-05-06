import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  wrapper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
    gap: 100,
  },
  title: {
    color: "black",
    width: "100%",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  box: {
    width: "100%",
    height: 300,
    borderWidth: 1,
    borderColor: "#95959580",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#95959580",
  },
  rightContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: "#191919",
  },
  icon: {
    marginLeft: 10,
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
