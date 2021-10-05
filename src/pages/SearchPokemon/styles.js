import { StyleSheet } from "react-native";

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
      marginTop: 10,
      width:290,
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
      color:'green',
      height: 40,
      width: 290,
      backgroundColor: '#FFF',
      borderRadius: 5,
      fontSize: 20,
      textAlign: 'center',
    },
    dados: {
      paddingHorizontal:60,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
      padding: 5,
    },
    habilidades:{    
      paddingHorizontal:60,
      fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF000',
        borderColor: '#FFF',
        padding: 5,
        borderRadius: 5,

    }
  });

  export default styles;
  