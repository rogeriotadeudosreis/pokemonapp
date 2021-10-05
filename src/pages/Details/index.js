import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Details(props) {
  const nameOrId = props.route.params.nameOrId
  //console.warn(nameOrId)
  
  const [pokemon, setPokemon] = useState();
  //console.warn(props)
  //setPokemon(props.route.params.pokemon) //props.route.params.pokemon
  //console.log(pokemon)
  useEffect(() => {
    async function handleSearch() {
        const response = await api.get(`/${nameOrId}`);
        //const response = await api.get('/5');
        //console.warn(response)
        setPokemon(response.data);
    }    
    handleSearch()

  },[]);

  return (
    <>
       <View style={styles.container}>
        <Text style={styles.texto}>Detalhes do Pokémon</Text>
        {/* <Text>{route.params?.nameOrId}</Text> */}
       {/*  <Text>{pokemon.name}</Text> */}
      </View>
      <View style={{flex: 1}}>
        {/* {pokemon && ( */}
          <View styles={styles.containerResultado}>
            <Text style={styles.dados}>{nameOrId}</Text>
            <Text style={styles.dados}>Habilidades: </Text>

            {/* <Text style={styles.dados}>
              Tipos: {pokemon.types[0].type.name}
            </Text> */}

           {/* <Text style={styles.dados}>Foto: {pokemon.name}</Text>*/}

            {/* <Text style={styles.dados}>
              Estatísticas: {pokemon.stats[5].stat.name}
            </Text> */}
          </View>
        {/* )} */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182522',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
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
    textAlign: 'center',
  },
  dados: {
    width: 250,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    borderColor: '#FFF',
    margin: 5,
    padding: 5,
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'yellow'
  },
});
