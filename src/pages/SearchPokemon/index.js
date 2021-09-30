import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default function SearchPokemon() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Buscar Pokémon</Text>
        <TextInput
          style={styles.inputNameOrId}
          placeholderTextColor="#171717"
          placeholder="Digite o nome ou id do pokémon..."
        />
        <TouchableOpacity style={styles.botaoBuscar}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c84b31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  botaoBuscar: {
    backgroundColor: '#0279b7',
    margin: 10,
    width: 220,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputNameOrId: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    // color:#
  },
});
