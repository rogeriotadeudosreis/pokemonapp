import React, {useState} from 'react';
import {Text, View, Alert, Keyboard} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import SvgUri from 'react-native-svg-uri';

import api from '../../Services/api';
import Logo from '../../Components/logo';

export default function SearchPokemon() {
  const navigation = useNavigation();
  const [nameOrId, setNameOrId] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [photo, setPhoto] = useState();

  async function handleSearch() {
    if (nameOrId === '') {
      alert('Por favor, informe um nome ou id válido!');
      setNameOrId('');
    }
    try {
      const response = await api.get(`/${nameOrId}`);
      setPokemon(response.data);
      Keyboard.dismiss();
      // setPhoto(response.data.sprites.other.dream_world.front_default)
      // console.warn(photo)
    } catch (error) {
      console.log('ERRO' + error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.texto}>Buscar Pokémon</Text>
        <TextInput
          style={styles.inputNameOrId}
          placeholder="Procurar pokémon..."
          value={nameOrId}
          onChangeText={setNameOrId}
        />
        <TouchableOpacity style={styles.botaoBuscar} onPress={handleSearch}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
        <View>
          {pokemon && (
            <View styles={styles.containerResultado}>
              <Text style={styles.dados}>Nome: {pokemon.name}</Text>
              <SvgUri width='35%' height="35%" uri={photo}/>
              <Text style={styles.dados}>Altura: {pokemon.height}</Text>
              <Text style={styles.dados}>Peso: {pokemon.weight}</Text>
                {/* Container exibindo as habilidades */}
              {/* <View style={styles.containerHabilidades}> */}
                <Text style={styles.habilidades}>Habilidades:
                {
                  pokemon.abilities.map( item => {
                    return (
                      <Text style={styles.dados}> {item.ability.name},</Text>
                      )
                    })             
                  }
                </Text>
              {/* </View> */}
              {/* Container exibindo os tipos */}
              {/* <View style={styles.containerTipos}> */}
                <Text style={styles.habilidades}>Tipos:
                {
                  pokemon.types.map( item => {
                    return (
                      <Text style={styles.dados}> {item.type.name},</Text>
                      )
                    })             
                  }
                </Text>
              {/* </View> */}
              {/* Container exibindo estatísticas */}
              {/* <View style={styles.containerEstatisticas}> */}
                <Text style={styles.habilidades}>Estatísticas:
                {
                  pokemon.stats.map( item => {
                    return (
                      <Text style={styles.dados}> {item.stat.name},</Text>
                      )
                    })             
                  }
                </Text>
              </View>
            // </View>
              
              )}
        </View>
      </View>
    </>
  );
}
