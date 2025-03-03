import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Íconos para mejorar el diseño

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const USER = "admin"; // Usuario permitido
    const PASS = "123456"; // Contraseña permitida

    if (username === USER && password === PASS) {
      navigation.replace("Prueba");
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    <ImageBackground 
      source={require("../../assets/fondo.png")} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image source={require("../../assets/favicon.png")} style={styles.logo} />
        <Text style={styles.title}>Bienvenido a EcoLogin</Text>
        <Text style={styles.subtitle}>Conéctate con la naturaleza</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#6B8E23"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#6B8E23"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity onPress={() => Alert.alert("Recuperación", "Función en desarrollo")}>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          ¿No tienes cuenta?{" "}
          <Text style={styles.signupLink} onPress={() => Alert.alert("Registro", "Función en desarrollo")}>
            Regístrate
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurece un poco el fondo para mejor visibilidad
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#DFF6D9", // Verde claro ecológico
  },
  subtitle: {
    fontSize: 16,
    color: "#B5D99C",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FFF0", // Verde muy claro
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#2E8B57", // Verde oscuro
  },
  forgot: {
    color: "#A5D6A7",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#4CAF50", // Verde fuerte ecológico
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupText: {
    color: "#DFF6D9",
    marginTop: 20,
  },
  signupLink: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});

export default LoginScreen;
