import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import userInfo from "../../hooks/userInfo";
import modelStore from "./../../hooks/model";
const ProfilePage = () => {
  const { setIsOpen } = modelStore();
  const { user, setUser } = userInfo();
  const { email, name, age, gender, id } = user;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setupdatedName] = useState(name);
  const [updatedEmail, setupdatedEmail] = useState(email);
  const [updatedGender, setUpdatedGender] = useState(gender);
  const [updatedAge, setUpdatedAge] = useState(age);
  const updateProfile = async () => {
    if (
      updatedEmail === email &&
      updatedName === name &&
      updatedGender === gender &&
      updatedAge === age
    ) {
      setIsEditing(false);
      return;
    }
    setIsOpen();
    const docRef = doc(db, "users", id);
    const newData = {
      name: updatedName,
      email: updatedEmail,
      age: updatedAge,
      gender: updatedGender,
    };
    await updateDoc(docRef, newData).then(() => {
      setIsOpen();
      setUser({ ...user, ...newData });
      setIsEditing(false);
    });
  };

  const edit = () => {
    if (isEditing) {
      updateProfile();
    } else {
      setIsEditing(!isEditing);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={
                gender === "male"
                  ? require("../../assets/images/boy.png")
                  : require("../../assets/images/girl.png")
              }
              style={styles.image}
            />
          </View>
        </View>
        <Text style={styles.title}>معلومات حسابك</Text>
        <View style={styles.infoContainer}>
          <TextInput
            mode="Flat"
            disabled={!isEditing}
            label="Name"
            value={updatedName}
            onChangeText={(text) => setupdatedName(text)}
            style={styles.input}
          />
          <TextInput
            disabled={!isEditing}
            mode="Flat"
            label="Email"
            value={updatedEmail}
            textAlign="right"
            style={styles.input}
            labelProps={{ style: { left: 10, top: 8 } }}
            onChangeText={(text) => setupdatedEmail(text)}
          />
          <TextInput
            disabled={!isEditing}
            mode="Flat"
            label="Gender"
            style={styles.input}
            value={updatedGender}
            onChangeText={(text) => setUpdatedGender(text)}
          />
          <TextInput
            disabled={!isEditing}
            mode="Flat"
            label="Age"
            number
            style={styles.input}
            value={updatedAge}
            onChangeText={(text) => setUpdatedAge(text)}
          />
          {/* <TouchableOpacity style={styles.editButton} onPress={edit}>
            <Text style={styles.editButtonText}>
              {isEditing ? "Save" : "Edit"}
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  imageContainer: {
    borderRadius: 50,
    backgroundColor: "#FFF",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    gap: 15,
  },

  infoSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    flex: 2,
    fontSize: 18,
    color: "#555",
  },
  editSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  editButton: {
    backgroundColor: "#0066CC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginVertical: 20,
  },
  editButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#0066CC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: { textAlign: "right", writingDirection: "rtl" },
});

export default ProfilePage;
