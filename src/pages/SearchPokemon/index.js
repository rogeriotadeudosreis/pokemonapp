import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import api from '../../Services/api';

export default function SearchPokemon() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [pokemon, setPokemon] = useState({});

  function handleListAll() {
    navigation.navigate('ListAll');
  }

  async function handleSearch() {
    if (nome === '') {
      alert('Por favor, informe um nome ou id válido!');
      setNome('');
      return;
    }

    try {
      const response = await api.get(`/${nome}`);
      setPokemon(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log('Erro' + error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Buscar Pokémon</Text>
        <TextInput
          style={styles.inputNameOrId}
          placeholderTextColor="#171717"
          placeholder="Digite o nome ou id do pokémon..."
          value={nome}
          onChangeText={setNome}
        />
        <TouchableOpacity style={styles.botaoBuscar} onPress={handleSearch}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      {pokemon && (
        <View styles={styles.containerResultado}>
          <Text style={styles.cep}>Nome: {pokemon.name}</Text>
          <Text style={styles.cep}>Altura: {pokemon.height}</Text>
          <Text style={styles.cep}>Peso: {pokemon.weight}</Text>
          <Text style={styles.cep}>Habilidades: {pokemon.Abilities.name}</Text>
          {/* <Text style={styles.cep}>Tipos: {pokemon.weight}</Text> */}
          {/* <Text style={styles.cep}>Estatísticas: {pokemon.}</Text> */}
        </View>
      )}
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
