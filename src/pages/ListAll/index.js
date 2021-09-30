import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import api from '../../Services/api';

export default function ListAll() {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  function Pokemons({data}) {
    return (
      <View style={styles.containerData}>
        <Text style={styles.name}>{data.name}</Text>
      </View>
    );
  }

  function handleSearch() {
    navigation.navigate('SearchPokemon');
  }

  async function handleListPokemon() {
    try {
      const response = await api.get();
      setList(response.data);
      console.warn(list);
    } catch (error) {
      console.log('ERRO' + error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Pokémon-App</Text>
        <TouchableOpacity
          style={styles.botaoBuscar}
          onPress={handleListPokemon}>
          <Text style={styles.textoBotao}>Listar pokémon</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Pokemons data={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c84b31',
    alignItems: 'center',
  },
  containerList: {
    flex: 4,
    width: '100%',
    backgroundColor: '#182522',
  },
  texto: {
    marginTop: 20,
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  botaoBuscar: {
    borderColor: '#FFF',
    borderWidth: 2,
    margin: 10,
    width: 200,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
  },
  name: {
    fontSize: 18,
    color: '#FFF',
  },
  containerData:{
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
