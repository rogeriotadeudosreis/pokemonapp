import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details(props) {
  const pokemon = props.route.params.pokemon
  console.log(pokemon) 

  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Detalhes do Pokémon</Text>
      </View>
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
  color:"#FFF",
fontSize: 24,
fontWeight: 'bold',
},
});
