import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/banner1280x426_v1672623700.png")}
          style={styles.image_banner}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.info_about}>
          <Image
            source={require("../assets/images/logo_v1672623700.png")}
            style={styles.info_logo}
          />
          <View>
            <TouchableOpacity>
              <View style={styles.info_about_button}>
                <Text style={styles.info_button_about1}>
                  Caldo Grosso Restaurante
                </Text>
                <AntDesign name="right" size={20} color="black" />
              </View>
              <View>
                <View style={styles.info_button_about2}>
                  <MaterialCommunityIcons
                    name="silverware-fork-knife"
                    size={15}
                    color="#7f929f"
                  />
                  <Text style={{ color: "#7f929f" }}>Bar & Restaurante</Text>
                </View>
                <View style={styles.info_button_about3}>
                  <AntDesign name="clockcircleo" size={18} color="red" />
                  <Text style={{ color: "red" }}>Fechada</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.info_description_button}>
            <FontAwesome6 name="motorcycle" size={16} color="#7f8f9f" />
            <Text style={{ color: "#7f8f9f", textDecorationLine: "underline" }}>
              Tempo estimado 40 minutos
            </Text>
          </TouchableOpacity>
          <View style={styles.info_description_text}>
            <FontAwesome name="shopping-basket" size={16} color="#7f8f9f" />
            <Text style={{ color: "#7f8f9f", textDecorationLine: "underline" }}>
              Pedido mínimo: R$ 20,00
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f7",
  },
  image_banner: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  info: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    padding: 25,
  },
  info_about: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  info_logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info_about_button: {
    flexDirection: "row",
    gap: 15,
  },
  info_button_about1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  info_button_about2: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#f8f9fa",
    borderRadius: 25,
  },
  info_button_about3: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 25,
    width: "50%",
    padding: 5,
  },
  info_description_button: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  info_description_text: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
