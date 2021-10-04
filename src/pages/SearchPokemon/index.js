import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, View, FlatList, Image} from 'react-native';
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
    navigation.navigate('Details', {pokemon});
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
        <Image
          style={{width: 200, height: 74, marginTop: 10}}
          source={require('../../assets/images/pokemon-logo.png')}
        />
        <Text style={styles.texto}>Buscar Pokémon</Text>
        <TextInput
          style={styles.inputNameOrId}
          placeholder="Digite o nome ou id do pokémon..."
          value={nome}
          onChangeText={setNome}
        />
        <TouchableOpacity style={styles.botaoBuscar} onPress={handleSearch}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          {pokemon && (
            <View styles={styles.containerResultado}>
              <Text style={styles.dados}>{pokemon.name}</Text>              
              <Text style={styles.dados}>Habilidades: </Text>


              <Text style={styles.dados}>
                Tipos: {pokemon.types[0].type.name}
              </Text>

              <Text style={styles.dados}>Foto: {pokemon.name}</Text>

              <Text style={styles.dados}>
                Estatísticas: {pokemon.stats[5].stat.name}
              </Text>

            </View>
          )}
        </View>
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
    marginTop: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  botaoBuscar: {
    backgroundColor: '#0279b7',
    margin: 10,
    width: 250,
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
    width: '60%',
    backgroundColor: '#FFF',
    borderRadius: 5,
    fontSize: 16,
    textAlign:'center',
  },
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
    textAlign:'center',
  },
});
