import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  input: {
    width: "100%",
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    direction: "ltr",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    width: "100%",
  },
  iconContainer: {
    position: "absolute",
    top: 12,
    lef: 12,
  },
  errorText: {
    color: "red",
    marginVertical: 2,
  },
  submitButton: {
    backgroundColor: "#ed7820",
    borderRadius: 30,
    padding: 15,
    elevation: 3, // add shadow on Android
    shadowColor: "#000", // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialLoginText: {
    marginHorizontal: 10,
    color: "#000",
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    color: "red",
  },
});
