import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

interface OrdeProps {
  title: string;
  description: string;
  price: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

export default function Orde({
  title,
  description,
  price,
  imageSource,
  onPress,
}: OrdeProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Conteúdo principal */}
      <View style={styles.content}>
        {/* Área de texto (lado esquerdo) */}
        <View style={styles.leftSide}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        {/* Área da imagem (lado direito) */}
        <View style={styles.rightSide}>
          <Image source={imageSource} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  content: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  leftSide: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  rightSide: {
    width: 80,
    height: 80,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
});
