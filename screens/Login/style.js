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
  formContainer: {
    marginBottom: 10,
  },
  input: {
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
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  rememberMeText: {
    fontSize: 16,
    color: "#364458",
  },

  button: {
    backgroundColor: "#7636ff",
    borderRadius: 30,
    padding: 10,
    elevation: 3, // add shadow on Android
    shadowColor: "#000", // add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  forgotPassword: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    justifyContent: "flex-start",
  },
  forgotPasswordText: {
    fontSize: 16,
    color: "#7636ff",
    textDecorationLine: "underline",
  },
  newAcc: {
    backgroundColor: "#e5e5e5",
    color: "black",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
  agreement: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  highLightText: {
    fontSize: 14,
    color: "#7636ff",
  },
});
