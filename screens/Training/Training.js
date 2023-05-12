import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import styles from "./style";

const Trainig = ({ navigation, route }) => {
  const { data, selectedLevel } = route.params;
  const scrollViewRef = useRef(null);
  const questions = data?.map((item, indx) => ({
    id: indx + 1,
    text: item,
    choices: ["جيد", "متوسط", "ضعيف"],
    icons: [
      require("../../assets/icons/emoji.png"),
      require("../../assets/icons/smile.png"),
      require("../../assets/icons/confused.png"),
    ],
    points: [2, 1, 0],
  }));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionsAnswered, setCurrentQuestionsAnswered] =
    useState(false);

  useEffect(() => {
    const startIndex = currentQuestionIndex * 3;
    const endIndex = Math.min(startIndex + 2, questions.length);
    for (let i = startIndex; i <= endIndex; i++) {
      if (answers[i] === null) {
        setCurrentQuestionsAnswered(false);
        return;
      }
    }
    setCurrentQuestionsAnswered(true);
  }, [currentQuestionIndex, answers]);

  const handleNext = () => {
    // Scroll to the top of the page
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    if (currentQuestionsAnswered) {
      setCurrentQuestionIndex((index) => index + 1);
      setCurrentQuestionsAnswered(false);
    } else {
      alert(
        "Please answer all questions on the current page before proceeding."
      );
    }
  };

  const handleBack = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });

    setCurrentQuestionIndex((index) => index - 1);
  };

  const handleAnswer = (questionId, choicePoint) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const questionIndex = questions.findIndex((q) => q.id === questionId);
      newAnswers[questionIndex] = choicePoint;
      return newAnswers;
    });

    setCurrentQuestionsAnswered(() => {
      const startIndex = currentQuestionIndex * 3;
      const endIndex = Math.min(startIndex + 2, questions.length);
      for (let i = startIndex; i < endIndex; i++) {
        if (answers[i] === null) {
          return false;
        }
      }
      return true;
    });
  };
  const renderQuestion = ({ id, text, choices, points, icons }) => {
    return (
      <View key={id} style={styles.singleQuestion}>
        <Text style={styles.questionText}>{text}</Text>
        <View style={[styles.choices]}>
          {choices?.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceContainer}
              onPress={() => handleAnswer(id, points[index])}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.choiceText}>{choice}</Text>
                <Image
                  style={[
                    styles.choiceIcon,
                    answers[id - 1] === points[index] ? { opacity: 1 } : null,
                  ]}
                  source={icons[index]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderQuestions = () => {
    const startIndex = currentQuestionIndex * 3;
    const endIndex = Math.min(startIndex + 3, questions.length);

    return questions.slice(startIndex, endIndex)?.map(renderQuestion);
  };

  const renderProgressBar = () => {
    const progress = ((currentQuestionIndex * 3) / questions.length) * 100; // set initial width to 10%
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    );
  };
  const renderButtons = () => {
    return (
      <View style={styles.buttonsContainer}>
        {currentQuestionIndex > 0 && (
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>السابق</Text>
          </TouchableOpacity>
        )}
        {currentQuestionIndex < Math.ceil(questions.length / 3) - 1 ? (
          <TouchableOpacity
            style={[
              styles.button,
              !currentQuestionsAnswered && styles.disabledButton,
            ]}
            onPress={handleNext}
            disabled={!currentQuestionsAnswered}
          >
            <Text style={styles.buttonText}>التالي</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.button,
              !currentQuestionsAnswered && styles.disabledButton,
            ]}
            onPress={submitAnswers}
            disabled={!currentQuestionsAnswered}
          >
            <Text style={styles.submitText}>انهاء</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const submitAnswers = () => {
    const result = answers.reduce((acc, curr) => acc + curr, 0);
    navigation.navigate("training-result", {
      result: (result / 10) * 100,
      selectedLevel,
    });
  };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{}}>
      <View style={styles.container}>
        {renderProgressBar()}
        <View style={styles.questionsContainer}>{renderQuestions()}</View>
        {renderButtons()}
      </View>
    </ScrollView>
  );
};

export default Trainig;
