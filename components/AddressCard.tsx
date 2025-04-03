import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Caso esteja usando Expo, você pode importar assim:
import { Ionicons } from "@expo/vector-icons";

export default function AddressCard() {
  // Este estado controla se o endereço está selecionado ou não
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      {/* Ícone de localização */}
      <Ionicons
        name="location-sharp"
        size={24}
        color="#333"
        style={styles.icon}
      />

      {/* Área de texto */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Rua Crestins, 221</Text>
        <Text style={styles.subtitle}>
          CEP: 45265-000, Casa, Centro, Barra Preto/BA, Perto ao cemitério
        </Text>
      </View>

      {/* Botão de seleção */}
      <TouchableOpacity
        onPress={() => setSelected(!selected)}
        style={[
          styles.selectButton,
          selected ? styles.selectedButton : styles.unselectedButton,
        ]}
      >
        {selected && <Ionicons name="checkmark" size={18} color="#FFF" />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  selectButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  unselectedButton: {
    borderWidth: 2,
    borderColor: "#FA620C",
    backgroundColor: "#FFF",
  },
  selectedButton: {
    backgroundColor: "#FA620C",
  },
});
