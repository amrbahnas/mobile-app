import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { data1, data2, data3, data4, data5, data6 } from "./data";
import userInfo from "../../hooks/userInfo";
const Questions = ({ navigation, route }) => {
  const { selectedboxs } = route.params;
  const {
    user: { age },
  } = userInfo();
  // const age = 7;
  const [questions, setquestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionsAnswered, setCurrentQuestionsAnswered] =
    useState(false);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const data = [];
    if (parseInt(age) > 8) {
      if (selectedboxs.includes("visual")) data.push(...data1);
      if (selectedboxs.includes("audio")) data.push(...data2);
      if (selectedboxs.includes("sensual")) data.push(...data3);
    } else {
      if (selectedboxs.includes("visual")) data.push(...data4);
      if (selectedboxs.includes("audio")) data.push(...data5);
      if (selectedboxs.includes("sensual")) data.push(...data6);
    }
    setquestions(data.map((item, index) => ({ ...item, id: index + 1 })));
    setAnswers(Array(data.length).fill(null));
  }, []);

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
  console.log(age);
  const renderQuestion = (question) => {
    return (
      <View key={question.id} style={styles.singleQuestion}>
        <Text style={styles.questionText}>{question.text}</Text>
        <View
          style={
            parseInt(age) < 8
              ? { justifyContent: "space-between", flexDirection: "row" }
              : { justifyContent: "flex-end", gap: 60, flexDirection: "row" }
          }
        >
          {question.choices?.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceContainer}
              onPress={() => handleAnswer(question.id, question.points[index])}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.choiceText}>{choice}</Text>
                <View style={styles.radioCircle}>
                  {answers[question.id - 1] === question.points[index] && (
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
            <Text style={styles.submitText}>تقديم</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const submitAnswers = () => {
    if (!age || !selectedboxs || selectedboxs.length === 0) {
      console.error("Invalid input: age and selectedboxs are required");
      return;
    }

    const result = { visual: 0, audio: 0, sensual: 0 };
    const sliceSize = parseInt(age) > 8 ? 10 : 0;

    result[selectedboxs[0]] = answers
      .slice(0, 10 + sliceSize)
      .reduce((a, b) => a + b, 0);

    if (selectedboxs.length >= 2) {
      result[selectedboxs[1]] = answers
        .slice(10 + sliceSize, 20 + sliceSize)
        .reduce((a, b) => a + b, 0);
    }

    if (selectedboxs.length === 3) {
      result[selectedboxs[2]] = answers
        .slice(20 + sliceSize)
        .reduce((a, b) => a + b, 0);
    }

    navigation.navigate("loading-page", {
      text: "جاري تحليل بياناتك ومن ثمه إعداد البرنامج المناسب لطفلك",
      target: "result-page",
      result,
      selectedboxs,
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

export default Questions;
