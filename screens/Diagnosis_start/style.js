import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 100,
  },
  title: {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    fontSize: 21,
    top: "0%",
    fontWeight: "bold",
  },
  body: {
    width: "100%",
    textAlign: "center",
    color: "#959595",
    fontSize: 19,
    marginVertical: 40,
  },
  image: {
    width: 253,
    height: 253,
    marginLeft: 60,
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
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});