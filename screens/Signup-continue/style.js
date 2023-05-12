import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: "#f0f0f0 ",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  top: {
    width: "100%",
    marginBottom: 20,
  },
  bottom: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
    width: "100%",
    textAlign: "right",
    marginBottom: 15,
  },
  gender: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: "48%",
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  selectedBox: {
    backgroundColor: "#ed7820",
    borderColor: "#ed7820",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  selectedLabel: {
    color: "#fff",
  },

  button: {
    backgroundColor: "#ed7820",
    borderRadius: 30,
    padding: 15,
    elevation: 3, // add shadow on Android
    shadowColor: "#000", // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 40,
    width: "100%",
    alignItems: "center",
    zIndex: -1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  agreement: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    zIndex: -1,
  },
  highLightText: {
    fontSize: 14,
    color: "#7636ff",
  },
});
