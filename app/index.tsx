import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
  LayoutChangeEvent,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState, useRef, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import OrderingOptions from "../components/OrderingOptions";
import Footer from "../components/Footer";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

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

type SectionIndices = {
  marmitex: number;
  saladas: number;
  refrigerantes: number;
  sucos_e_chas: number;
  aguas: number;
  chocolates: number;
};

type DropdownValue = keyof SectionIndices;

export default function Screen() {
  const flatListRef = useRef<FlatList<ScreenDataItem>>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<DropdownValue | null>(null);
  const [items, setItems] = useState([
    { label: "MARMITEX", value: "marmitex" },
    { label: "SALADAS", value: "saladas" },
    { label: "REFRIGERANTES", value: "refrigerantes" },
    { label: "SUCOS E CHÁS", value: "sucos_e_chas" },
    { label: "ÁGUAS", value: "aguas" },
    { label: "CHOCOLATES", value: "chocolates" },
  ]);

  const [topSectionHeight, setTopSectionHeight] = useState(0);

  const sectionIndices: SectionIndices = {
    marmitex: 0,
    saladas: 3,
    refrigerantes: 6,
    sucos_e_chas: 9,
    aguas: 12,
    chocolates: 15,
  };

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

  useEffect(() => {
    if (value && flatListRef.current) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      const index = sectionIndices[value];
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.1,
        });
      }, 300);
    }
  }, [value]);

  const getItemLayout = (
    data: ArrayLike<ScreenDataItem> | null | undefined,
    index: number
  ) => ({
    length: 100,
    offset: 100 * index,
    index,
  });

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
      <View
        style={styles.topSection}
        onLayout={(event: LayoutChangeEvent) => {
          const { height } = event.nativeEvent.layout;
          setTopSectionHeight(height + 20); // Adiciona margem de segurança
        }}
      >
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
            scrollViewProps={{ nestedScrollEnabled: true }}
            zIndex={1000}
            zIndexInverse={3000}
          />
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: topSectionHeight + 30 }, // Espaço extra para segurança
        ]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        ListHeaderComponent={<View style={{ height: 10 }} />}
        onScrollToIndexFailed={({ index, averageItemLength }) => {
          const offset = index * averageItemLength;
          flatListRef.current?.scrollToOffset({ offset, animated: false });
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({ index, animated: true });
          }, 100);
        }}
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 1000,
    backgroundColor: "#f3f5f7",
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
