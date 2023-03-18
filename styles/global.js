import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#ff6b6b",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  linkContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: "#333",
  },
  Link: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#ff6b6b",
  },
});
