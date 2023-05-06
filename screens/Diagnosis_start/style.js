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
  },
  titleWrapper: {
    width: "100%",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    width: "100%",
    textAlign: "center",
    color: "#959595",
    fontSize: 19,
  },
  image: {
    marginLeft: 60,
    width: 250,
    marginTop: 100,
    marginBottom: 50,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#14bbff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
