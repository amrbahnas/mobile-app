import { useState } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import useStore from "../hooks/userInfo";
import { useNavigation } from "@react-navigation/native";
export default DrawerContent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user: { name, email, gender, age },
  } = useStore();
  const nav = useNavigation();
  const signOutHandler = async (props) => {
    const auth = getAuth();
    // sign out the current user
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        nav.navigate("login");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error:", error);
      });
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.imageWraper}>
          <Image
            source={
              gender === "male"
                ? require("../assets/images/boy.png")
                : require("../assets/images/girl.png")
            }
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          style={styles.menuControl}
        >
          <Text style={styles.email}>{email}</Text>
          {!isOpen ? (
            <AntDesign name="caretright" size={13} color="#7a7a7a" />
          ) : (
            <AntDesign name="caretdown" size={13} color="#7a7a7a" />
          )}
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.option}>
              <AntDesign name="profile" size={18} color="black" />
              <Text style={styles.optionText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, styles.lastOption]}
              onPress={signOutHandler}
            >
              <FontAwesome name="sign-out" size={18} color="black" />
              <Text style={styles.optionText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },

  imageWraper: {
    width: 80,
    height: 80,
    padding: 2,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#e3e3e3",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {
    color: "#7a7a7a",
  },
  menuControl: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  menu: {
    marginTop: 20,
    gap: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionText: {
    fontSize: 14,
  },
});
