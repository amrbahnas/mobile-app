import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },

  questionsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  singleQuestion: {
    width: "100%",
    flex: 1,
    minHeight: 180,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
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
  choices: {
    width: "100%",
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
  choiceIcon: {
    width: 48,
    height: 48,
    opacity: 0.3,
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
    marginVertical: 60,
    flexDirection: "row",
    justifyContent: "center",
    gap: 60,

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
  submitText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: "gray",
    borderColor: "gray",
  },
});
