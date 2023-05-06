import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  loadingContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -200,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
    color: "#959595",
  },
  imageContainer: {
    position: "relative",
    width: 200,
    height: 200,
  },
  progressBar: {
    position: "absolute",
    top: -8,
    left: -8,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    overflow: "hidden",
  },
});
