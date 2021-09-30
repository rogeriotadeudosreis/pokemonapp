import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListFavorite() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Pokémon Favorito</Text>
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
