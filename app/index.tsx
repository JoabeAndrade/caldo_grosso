import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import OrderingOptions from "../components/OrderingOptions";
import Footer from "../components/Footer";

type ScreenItemBase = {
  id?: string;
};

type HeaderItem = ScreenItemBase & {
  type: "header";
  title: string;
};

type OrderingItem = ScreenItemBase & {
  type: "ordering";
  title: string;
  description: string;
  price: string;
};

type ScreenDataItem = HeaderItem | OrderingItem;

export default function Screen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    { label: "MARMITEX", value: "marmitex" },
    { label: "SALADAS", value: "saladas" },
    { label: "REFRIGERANTES", value: "refrigerantes" },
    { label: "SUCOS E CHÁS", value: "sucos_e_chas" },
    { label: "ÁGUAS", value: "aguas" },
    { label: "CHOCOLATES", value: "chocolates" },
  ]);

  const data: ScreenDataItem[] = [
    { type: "header", title: "MARMITEX" },
    {
      type: "ordering",
      title: "MINI",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 21,00",
    },
    {
      type: "ordering",
      title: "NORMAL",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 25,00",
    },
    { type: "header", title: "SALADAS" },
    {
      type: "ordering",
      title: "MINI",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 21,00",
    },
    {
      type: "ordering",
      title: "NORMAL",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 25,00",
    },
    { type: "header", title: "REFRIGERANTES" },
    {
      type: "ordering",
      title: "MINI",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 21,00",
    },
    {
      type: "ordering",
      title: "NORMAL",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 25,00",
    },
    { type: "header", title: "SUCOS E CHÁS" },
    {
      type: "ordering",
      title: "MINI",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 21,00",
    },
    {
      type: "ordering",
      title: "NORMAL",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 25,00",
    },
    { type: "header", title: "ÁGUAS" },
    {
      type: "ordering",
      title: "MINI",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 21,00",
    },
    {
      type: "ordering",
      title: "NORMAL",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 25,00",
    },
    { type: "header", title: "CHOCOLATES" },
    {
      type: "ordering",
      title: "MINI",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 21,00",
    },
    {
      type: "ordering",
      title: "NORMAL",
      description: "Arroz, feijão, duas misturas e um acompanhamento.",
      price: "R$ 25,00",
    },
  ];

  const renderItem = ({ item }: { item: ScreenDataItem }) => {
    switch (item.type) {
      case "header":
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{item.title}</Text>
          </View>
        );

      case "ordering":
        return (
          <OrderingOptions
            title={item.title}
            description={item.description}
            price={item.price}
            imageSource={require("../assets/images/logo_v1672623700.png")}
          />
        );

      default:
        const _exhaustiveCheck: never = item;
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Seção Superior Fixa */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/banner1280x426_v1672623700.png")}
          style={styles.image_banner}
        />

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
              <Text
                style={{ color: "#7f8f9f", textDecorationLine: "underline" }}
              >
                Tempo estimado 40 minutos
              </Text>
            </TouchableOpacity>
            <View style={styles.info_description_text}>
              <FontAwesome name="shopping-basket" size={16} color="#7f8f9f" />
              <Text
                style={{ color: "#7f8f9f", textDecorationLine: "underline" }}
              >
                Pedido mínimo: R$ 20,00
              </Text>
            </View>
          </View>
        </View>

        {/* Dropdown Centralizado */}
        <View style={styles.drop}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Selecione uma opção"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            dropDownDirection="BOTTOM"
            zIndex={1000}
            zIndexInverse={3000}
          />
        </View>
      </View>

      {/* Lista Principal */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        ListHeaderComponent={<View style={{ height: 10 }} />}
      />

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f7",
  },
  topSection: {
    zIndex: 1000,
    elevation: 1000,
  },
  image_banner: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  info: {
    width: "100%",
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
  drop: {
    width: "100%",
    marginVertical: 15,
    zIndex: 1000,
    alignItems: "center",
  },
  dropdown: {
    width: "90%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  dropdownContainer: {
    width: "90%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
    maxHeight: 250,
    zIndex: 1000,
    alignSelf: "center",
  },
  scrollContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    zIndex: 1,
  },
  header: {
    padding: 10,
    backgroundColor: "#f3f5f7",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
});
