import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ProductDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho com título e status do produto */}
      <View style={styles.header}>
        <Text style={styles.title}>Detalhe do produto</Text>
        <Text style={styles.availability}>Indisponível</Text>
      </View>

      {/* Seção de valor médio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Valor médio</Text>
        <Text style={styles.sectionText}>
          O preço final vai considerar a média dos valores entre as opções que
          você escolher.
        </Text>
        <Text style={styles.example}>
          Exemplo: Se você escolher a opção A (R$ 100) e a opção B (R$ 200), o
          preço final será de R$ 150.
        </Text>
      </View>

      {/* Botão "Ver mais" */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver mais</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  availability: {
    fontSize: 16,
    color: "red",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  example: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
});

export default ProductDetailScreen;
