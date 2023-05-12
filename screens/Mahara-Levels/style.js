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
  header: {
    width: "100%",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  box: {
    width: "100%",
    height: 335,
    marginVertical: 10,
  },
  level: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  disabled: {
    opacity: 0.5,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#14bbff",
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: "#191919",
  },
  icon: {
    marginLeft: 10,
    width: 25,
    height: 25,
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
