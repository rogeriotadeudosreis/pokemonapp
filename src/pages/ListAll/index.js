import React, {useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import api from '../../Services/api';
import styles from './styles';
import Logo from '../../Components/logo';

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
      // const response = await api.get('/?limit=10&offset=0');
      const response = await api.get('/');
      setList(response.data.results);
    } catch (error) {
      console.log('ERRO' + error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Logo />
        <View style={styles.botaoElupa}>
          <TouchableOpacity
            style={styles.botaoListar}
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
