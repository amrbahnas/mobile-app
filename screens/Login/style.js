import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0 ",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  formContainer: {
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 50,
    fontWeight: "bold",
    color: "#364458",
  },
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    direction: "rtl",
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    flex: 1,
    color: "#364458",
  },
  rememberMeText: {
    fontSize: 16,
    color: "#364458",
  },
  forgotPasswordText: {
    fontSize: 16,
    marginLeft: "auto",
    color: "#364458",
  },
  button: {
    backgroundColor: "#fca719",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialButton: {
    backgroundColor: "#ddd",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
    fontSize: 16,
  },
  createAccountText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
