import { useState } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import useStore from "../hooks/userInfo";
export default DrawerContent = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    user: { name, email, gender, age },
    setLogin,
  } = useStore();
  const signOutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLogin(false);
      })
      .catch((error) => {
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
          {!isOpen ? (
            <AntDesign name="caretleft" size={13} color="#7a7a7a" />
          ) : (
            <AntDesign name="caretdown" size={13} color="#7a7a7a" />
          )}
          <Text style={styles.email}>{email}</Text>
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>الصفحة الشخصية</Text>
              <AntDesign name="profile" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, styles.lastOption]}
              onPress={signOutHandler}
            >
              <Text style={styles.optionText}>تسجيل الخروج</Text>
              <FontAwesome name="sign-out" size={18} color="black" />
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
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-end",
  },
  email: {
    color: "#7a7a7a",
  },
  menuControl: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",

    gap: 8,
  },
  menu: {
    marginTop: 20,
    gap: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
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
