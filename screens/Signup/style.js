import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  formContainer: {
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 10,
  },
  nameInputContainer: {
    width: "48%",
  },
  input: {
    // marginBottom: 2,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    direction: "rtl",
    borderColor: "#bbb",
    fontSize: 18,
    width: "100%",
  },

  submitButton: {
    backgroundColor: "#fca719",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
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
