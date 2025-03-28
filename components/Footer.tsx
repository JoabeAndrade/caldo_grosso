import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footerIcons}>
        <MaterialIcons name="menu-book" size={20} color="#dc5c20" />
        <Text style={styles.footerText}>Cardápio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcons}>
        <Fontisto name="search" size={20} color="#dc5c20" />
        <Text style={styles.footerText}>Busca</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcons}>
        <MaterialIcons name="login" size={20} color="#dc5c20" />
        <Text style={styles.footerText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerIcons: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#dc5c20",
  },
});
