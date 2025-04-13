import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

type OptionMap = {
  [key: string]: number;
};

const misturasList = [
  "Strogonoff de carne",
  "Cupim assado",
  "Costelinha de porco assada",
  "Carne assada",
  "Linguiça toscana assada",
  "Filé de frango a milanesa",
  "Medalhão de frango com bacon",
];

const acompanhamentosList = [
  "Alface",
  "Tomate e Cebola",
  "Brócolis",
  "Beterraba",
  "Vagem com cenoura",
  "Berinjela",
  "Pepino",
  "Batatinha",
  "Palmito (palmito,presunto,queijo e azeitona",
  "Bifum (macarrão oriental)",
];

export default function DetalheSalada() {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const params = useLocalSearchParams();
  const { title, description, price } = params;
  const [observacoes, setObservacoes] = useState("");
  const [misturasOptions, setmisturasOptions] = useState<OptionMap>(
    misturasList.reduce((acc, item) => ({ ...acc, [item]: 0 }), {})
  );
  const [selectedAcompanhamentos, setSelectedAcompanhamentos] = useState<
    string[]
  >([]);

  const handleIncrement = (item: string) => {
    const totalSelected = Object.values(misturasOptions).reduce(
      (acc, curr) => acc + curr,
      0
    );
    if (totalSelected < 2) {
      setmisturasOptions((prev) => ({ ...prev, [item]: prev[item] + 1 }));
    }
  };

  const handleDecrement = (item: string) => {
    if (misturasOptions[item] > 0) {
      setmisturasOptions((prev) => ({ ...prev, [item]: prev[item] - 1 }));
    }
  };

  const toggleAcompanhamento = (item: string) => {
    if (selectedAcompanhamentos.includes(item)) {
      setSelectedAcompanhamentos((prev) =>
        prev.filter((acomp) => acomp !== item)
      );
    } else {
      if (selectedAcompanhamentos.length >= 8) {
        Alert.alert(
          "Limite atingido",
          "Você pode escolher no máximo 8 acompanhamentos."
        );
      } else {
        setSelectedAcompanhamentos((prev) => [...prev, item]);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Detalhe do produto</Text>
        </View>
      </View>
      <Image
        style={styles.image}
        source={
          title == "SALADA - MINI"
            ? require("../assets/images/salada_mini.jpg")
            : require("../assets/images/salada_normal.jpg")
        }
      />

      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.sectionTitle}>Escolha duas misturas</Text>
            <Text style={styles.subText}>Escolha 2 opções</Text>
          </View>
          <View style={styles.badge}>
            {Object.values(misturasOptions).reduce(
              (acc, curr) => acc + curr,
              0
            ) === 2 ? (
              <Ionicons name="checkmark-circle" size={20} color="green" />
            ) : (
              <Text style={styles.badgeText}>Obrigatório</Text>
            )}
          </View>
        </View>

        {misturasList.map((item) => (
          <View key={item} style={styles.optionContainer}>
            <Text style={styles.optionText}>{item}</Text>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => handleDecrement(item)}>
                <Text style={styles.counterBtn}>−</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{misturasOptions[item]}</Text>
              <TouchableOpacity
                onPress={() => {
                  const totalSelected = Object.values(misturasOptions).reduce(
                    (acc, curr) => acc + curr,
                    0
                  );
                  if (totalSelected >= 2) {
                    Alert.alert("Atenção", "Limite de 2 misturas atingido!", [
                      { text: "OK" },
                    ]);
                  } else {
                    handleIncrement(item);
                  }
                }}
              >
                <Text
                  style={[
                    styles.counterBtn,
                    {
                      color:
                        Object.values(misturasOptions).reduce(
                          (acc, curr) => acc + curr,
                          0
                        ) >= 2
                          ? "#ccc"
                          : "#ef4444",
                    },
                  ]}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.headerRow}>
          <View>
            <Text style={styles.sectionTitle}>Escolha o mix de salada</Text>
            <Text style={styles.subText}>Escolha de 5 até 8 opções</Text>
          </View>
          <View style={styles.badge}>
            {selectedAcompanhamentos.length >= 5 ? (
              <Ionicons name="checkmark-circle" size={20} color="green" />
            ) : (
              <Text style={styles.badgeText}>Obrigatório</Text>
            )}
          </View>
        </View>

        {acompanhamentosList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => toggleAcompanhamento(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
            <View style={styles.radioSquare}>
              {selectedAcompanhamentos.includes(item) && (
                <Ionicons name="checkmark" size={16} color="#ef4444" />
              )}
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Observações</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Digite as observações aqui..."
          multiline
          maxLength={180}
          value={observacoes}
          onChangeText={setObservacoes}
        />
        <Text style={styles.charCounter}>{observacoes.length}/180</Text>
        <Text style={styles.infoText}>
          Converse diretamente com o estabelecimento caso queira modificar algum
          item. Neste campo não são aceitas modificações que podem gerar
          cobrança adicional.
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Ionicons name="remove-circle-outline" size={32} color="#ef4444" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Ionicons name="add-circle-outline" size={32} color="#ef4444" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            const totalMisturas = Object.values(misturasOptions).reduce(
              (a, b) => a + b,
              0
            );
            if (totalMisturas < 2 || selectedAcompanhamentos.length < 5) {
              Alert.alert(
                "Atenção",
                "Selecione 2 misturas e pelo menos 5 acompanhamentos"
              );
              return;
            }
            Alert.alert(
              "Sucesso",
              `${quantity} salada(s) adicionada(s) ao carrinho!`
            );
          }}
        >
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.closedContainer}>
        <Text style={styles.closedText}>Fechado no momento!</Text>
        <Text style={styles.subText}>
          No momento, não estamos aceitando novos pedidos.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "relative",
  },
  titleWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
    marginTop: 4,
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  section: {
    backgroundColor: "#f3f4f6",
    marginTop: 20,
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 30,
  },
  subText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 14,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterBtn: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#ef4444",
    fontWeight: "bold",
  },
  counterValue: {
    fontSize: 16,
    minWidth: 20,
    textAlign: "center",
    color: "#000",
  },
  closedContainer: {
    alignItems: "center",
    padding: 20,
  },
  closedText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  badge: {
    backgroundColor: "#d1d5db",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: "#4b5563",
    fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  radioSquare: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: "#ef4444",
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    height: 80,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    textAlignVertical: "top",
  },
  charCounter: {
    fontSize: 12,
    color: "#666",
    textAlign: "right",
    marginTop: 4,
  },
  infoText: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
