import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  singleQuestion: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 30,
  },
  choiceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  chooseWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#14bbff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadioCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#14bbff",
  },
  choiceText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  progressBarContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginVertical: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#14bbff",
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 60,
    marginTop: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#14bbff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: "gray",
    borderColor: "gray",
  },
});
