import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c84b31',
      alignItems: 'center',
    },
    containerList: {
      flex: 3,
      width: '100%',
      backgroundColor: '#c84d31',
    },
    texto: {
      marginTop: 20,
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
    },
    botaoListar: {
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
      margin: 10,
      fontSize: 20,
      color: '#808080',
    },
    containerData: {
      marginTop: 10,
      backgroundColor: '#FFF',
      marginHorizontal: 50,
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
      marginTop:10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

  export default styles;