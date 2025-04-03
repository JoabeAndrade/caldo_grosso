import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Option = {
  id: number;
  label: string;
};

const misturasData: Option[] = [
  { id: 1, label: "Cupim assado" },
  { id: 2, label: "Costelinha de porco assada" },
  { id: 3, label: "Carne assada" },
  { id: 4, label: "Linguiça toscana assada" },
  { id: 5, label: "Filé de frango à milanesa" },
  { id: 6, label: "Filé de peixe à milanesa" },
];

const acompanhamentosData: Option[] = [
  { id: 1, label: "Batata frita" },
  { id: 2, label: "Farofa" },
  { id: 3, label: "Torresmo" },
  { id: 4, label: "Purê de batata" },
  { id: 5, label: "Legumes (brócolis, beterraba, vagem com cenoura)" },
  { id: 6, label: "Sem acompanhamento" },
];

const CardapioComponent: React.FC = () => {
  // Estado para armazenar as "misturas" selecionadas (até 2 opções)
  const [selectedMisturas, setSelectedMisturas] = useState<number[]>([]);
  // Estado para armazenar o acompanhamento selecionado (1 opção)
  const [selectedAcompanhamento, setSelectedAcompanhamento] = useState<
    number | null
  >(null);

  // Função para lidar com a seleção das "misturas"
  const handleSelectMistura = (id: number) => {
    const isSelected = selectedMisturas.includes(id);

    if (isSelected) {
      setSelectedMisturas((prev) => prev.filter((itemId) => itemId !== id));
    } else {
      if (selectedMisturas.length < 2) {
        setSelectedMisturas((prev) => [...prev, id]);
      } else {
        Alert.alert("Atenção", "Você só pode selecionar 2 opções de mistura.");
      }
    }
  };

  // Função para lidar com a seleção do acompanhamento
  const handleSelectAcompanhamento = (id: number) => {
    setSelectedAcompanhamento(id);
  };

  // Função que pode ser chamada ao finalizar o pedido
  const handleConfirm = () => {
    if (selectedMisturas.length !== 2) {
      Alert.alert("Atenção", "Você deve escolher exatamente 2 misturas.");
      return;
    }

    if (!selectedAcompanhamento) {
      Alert.alert("Atenção", "Você deve escolher 1 acompanhamento.");
      return;
    }

    const misturasEscolhidas = misturasData
      .filter((m) => selectedMisturas.includes(m.id))
      .map((m) => m.label)
      .join(", ");
    const acompanhamentoEscolhido = acompanhamentosData.find(
      (a) => a.id === selectedAcompanhamento
    )?.label;

    Alert.alert(
      "Pedido Confirmado",
      `Misturas escolhidas: ${misturasEscolhidas}\nAcompanhamento escolhido: ${acompanhamentoEscolhido}`
    );
  };

  return (
    <View style={styles.container}>
      {/* Seção de Misturas */}
      <Text style={styles.title}>Escolha 2 opções</Text>
      {misturasData.map((item) => {
        const isSelected = selectedMisturas.includes(item.id);
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handleSelectMistura(item.id)}
          >
            <Ionicons
              name={isSelected ? "checkbox" : "checkbox-outline"}
              size={24}
              color={isSelected ? "#4CAF50" : "#555"}
              style={styles.icon}
            />
            <Text style={styles.itemText}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Seção de Acompanhamentos */}
      <Text style={[styles.title, { marginTop: 16 }]}>Escolha 1 opção</Text>
      {acompanhamentosData.map((item) => {
        const isSelected = selectedAcompanhamento === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handleSelectAcompanhamento(item.id)}
          >
            <Ionicons
              name={isSelected ? "radio-button-on" : "radio-button-off"}
              size={24}
              color={isSelected ? "#2196F3" : "#555"}
              style={styles.icon}
            />
            <Text style={styles.itemText}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Botão de confirmação */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardapioComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  icon: {
    marginRight: 8,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  confirmButton: {
    marginTop: 24,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
