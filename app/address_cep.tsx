import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import AddressCard from "./address";

export default function AddressCep() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  // Tipagem do parâmetro "value" como string para evitar o erro
  const handleCepChange = async (value: string) => {
    // Remove todos os caracteres que não sejam dígitos
    let numericCep = value.replace(/\D/g, "");

    // Limita o CEP a 8 dígitos
    if (numericCep.length > 8) {
      numericCep = numericCep.slice(0, 8);
    }

    // Formata o CEP com hífen após os 5 primeiros dígitos (opcional)
    let formattedCep = numericCep;
    if (numericCep.length > 5) {
      formattedCep = numericCep.slice(0, 5) + "-" + numericCep.slice(5);
    }
    setCep(formattedCep);

    // Se o CEP tiver 8 dígitos, faz a busca na API ViaCEP
    if (numericCep.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${numericCep}/json/`
        );
        const data = await response.json();

        if (data.erro) {
          Alert.alert("CEP inválido", "Verifique o CEP e tente novamente.");
          setAddress(null);
          return;
        }

        setAddress(data);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível buscar o CEP.");
        setAddress(null);
      }
    } else {
      setAddress(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CEP*</Text>
      <TextInput
        style={styles.input}
        placeholder="00000-000"
        keyboardType="numeric"
        value={cep}
        onChangeText={handleCepChange}
      />

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://buscacepinter.correios.com.br/app/endereco/index.php"
          )
        }
      >
        <Text style={styles.link}>Não sei meu CEP</Text>
      </TouchableOpacity>

      {address && <AddressCard addressData={address} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
  link: {
    color: "#FA620C",
    marginBottom: 16,
    textDecorationLine: "underline",
  },
});
