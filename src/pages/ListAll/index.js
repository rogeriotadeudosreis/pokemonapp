import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import api from '../../Services/api';

export default function ListAll() {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  function Pokemons({dados}) {
    return (
      <View style={styles.containerData}>
        <Text style={styles.namePokemon}>{dados.name}</Text>
      </View>
    );
  }

  function handleSearch() {
    navigation.navigate('SearchPokemon');
  }

  async function handleListPokemon() {
    try {
      const response = await api.get('/?limit=10&offset=0');
      setList(response.data.results);
    } catch (error) {
      console.log('ERRO' + error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Pokémon-App</Text>
        <View style={styles.botaoElupa}>
          <TouchableOpacity
            style={styles.botaoBuscar}
            onPress={handleListPokemon}>
            <Text style={styles.textoBotao}>Listar pokémon</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearch}>
            <Image
              style={styles.lupaImg}
              source={require('../../assets/images/iconlupa.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={list}
          keyExtractor={item => item.name}
          renderItem={({item}) => <Pokemons dados={item} />}
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
    backgroundColor: '#c84d31',
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
    width: 150,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },
  namePokemon: {
    paddingLeft: 20,
    margin: 10,
    fontSize: 20,
    color: '#000',
  },
  containerData: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lupaImg: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  botaoElupa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
