import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
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
    width:"100%"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    overflow: "hidden",
  },
});
