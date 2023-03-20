import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.headerContent}
      >
        <Text style={{ color: "#364458", fontWeight: "bold" }}>العودة</Text>
        <AntDesign name="right" size={24} color="#364458" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
  },
  headerContent: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
