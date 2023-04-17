import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  scrollViewRef,
} from "react-native";
import styles from "./style";
import { questions } from "./data";

const Questions = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestionsAnswered, setCurrentQuestionsAnswered] =
    useState(false);
  const scrollViewRef = useRef(null);
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
  }, [currentQuestionIndex]);

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

  const handleAnswer = (questionId, choiceIndex) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const questionIndex = questions.findIndex((q) => q.id === questionId);
      newAnswers[questionIndex] = choiceIndex;
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

  const renderQuestion = (question) => {
    return (
      <View key={question.id} style={styles.singleQuestion}>
        <Text style={styles.questionText}>{question.text}</Text>
        <View style={styles.chooseWrapper}>
          {question.choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceContainer}
              onPress={() => handleAnswer(question.id, index)}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.choiceText}>{choice}</Text>
                <View style={styles.radioCircle}>
                  {answers[question.id - 1] === index && (
                    <View style={styles.selectedRadioCircle} />
                  )}
                </View>
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

    return questions.slice(startIndex, endIndex).map(renderQuestion);
  };

  const renderProgressBar = () => {
    const progress = ((currentQuestionIndex * 3) / questions.length) * 100 + 10; // set initial width to 10%
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
            <Text style={styles.submitText}>تقديم</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const submitAnswers = () => {
    console.log(answers);
    // Handle submitting answers to server or
    const result = answers.reduce((a, b) => a + b);
    navigation.navigate("loading-page", {
      text: "جاري تحليل بياناتك ومن ثمه إعداد البرنامج المناسب لطفلك",
      result,
    });
  };

  return (
    <ScrollView ref={scrollViewRef}>
      <View style={styles.container}>
        {renderProgressBar()}
        {renderQuestions()}
        {renderButtons()}
      </View>
    </ScrollView>
  );
};

export default Questions;
