import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, View, FlatList} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import api from '../../Services/api';

export default function SearchPokemon() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [pokemon, setPokemon] = useState(null);

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
            <Text style={styles.dados}>Nome: {pokemon.name}</Text>
            <Text style={styles.dados}>Altura: {pokemon.height}</Text>
            <Text style={styles.dados}>Peso: {pokemon.weight}</Text>
            <Text style={styles.dados}>
              Habilidades:
              {pokemon.abilities[0].ability.name}
            </Text>
            <Text style={styles.dados}>
              Tipos: {pokemon.types[0].type.name}
            </Text>

            

            <Text style={styles.dados}>Foto: {pokemon.name}</Text>
            <Text style={styles.dados}>
              Estatísticas: {pokemon.stats[0].stat.name}
            </Text>
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
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  // containerResultado: {
  //   width: '100%',
  //   backgroundColor: 'yellow',
  // },
  dados: {
    width: 250,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#FFF',
    margin: 5,
    padding: 5,
    height: 40,
    borderRadius: 5,
  },
});
