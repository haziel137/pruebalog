import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, FlatList, Modal } from 'react-native';

export default function WaterReuseApp() {
  const [options, setOptions] = useState([
    { label: 'Lavado de autos', images: [require('../../assets/carro.png'), require('../../assets/carroLa.gif')] },
    { label: 'Inodoro', images: [require('../../assets/inodoro.png'), require('../../assets/inodoroA.gif')] },
    { label: 'Riego de cultivos', images: [require('../../assets/cultivo.png'), require('../../assets/cultivoAl.gif')] },
    { label: 'Riego de jardín', images: [require('../../assets/jardin.png'), require('../../assets/jardinAl.gif')] },
    { label: 'Lavado de ropa', images: [require('../../assets/ropa.png'), require('../../assets/ropaLavada.gif')] },
    { label: 'Limpieza general', images: [require('../../assets/llave.png'), require('../../assets/llaveAbierta.gif')] },
  ]);

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [animatedOptionIndex, setAnimatedOptionIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptionText, setSelectedOptionText] = useState('');

  const handlePress = (index) => {
    setSelectedOptionIndex(index);
    setSelectedOptionText(options[index].label);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setAnimatedOptionIndex(selectedOptionIndex);
      setTimeout(() => setAnimatedOptionIndex(null), 3000);
    }, 500);
  };

  const getOptionImage = (index) => {
    return animatedOptionIndex === index
      ? { uri: Image.resolveAssetSource(options[index].images[1]).uri, key: Date.now().toString() }
      : options[index].images[0];
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={(item) => item.label}
        numColumns={2}
        ListHeaderComponent={
          <View style={styles.tankContainer}>
            <Image source={require('../../assets/tanque.gif')} style={styles.tankImage} />
            <Text style={styles.headerText}>Opciones de Reutilización del Agua</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePress(index)} style={[styles.option, selectedOptionIndex === index && styles.selectedOption]}>
            <Image source={getOptionImage(index)} style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContainer}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Acción Seleccionada</Text>
            <Text style={styles.modalText}>{selectedOptionText}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Integrantes: Orozco Rodriguez Haziel Abraham y Villegas Rivera Brendy Estrella</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3e5fc',
    padding: 15,
  },
  flatListContainer: {
    alignItems: 'center',
  },
  tankContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tankImage: {
    width: 170,
    height: 170,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#01579b',
    textAlign: 'center',
    marginBottom: 15,
  },
  footer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0288d1',
    marginTop: 10,
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  option: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#81d4fa',
    padding: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    width: 150,
    borderWidth: 2,
    borderColor: '#4fc3f7',
  },
  selectedOption: {
    backgroundColor: '#29b6f6',
    borderColor: '#0288d1',
  },
  icon: {
    width: 110,
    height: 110,
    borderRadius: 20,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#01579b',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 250,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#01579b',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#0288d1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
