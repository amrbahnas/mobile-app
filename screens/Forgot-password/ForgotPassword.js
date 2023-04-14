import { useState } from "react";
import styles from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>
          قم بادخال بريدك الالكتروني لكي تتمكن من استعادته
        </Text>
        <TextInput
          style={styles.input}
          placeholder="البريد الإلكتروني"
          onChangeText={(value) => setemail(value)}
          value={email}
          textAlign="right"
          writingDirection="rtl"
        />
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text style={styles.buttonText}>
            {loading ? "جاري التحميل" : "الاستمرار"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
