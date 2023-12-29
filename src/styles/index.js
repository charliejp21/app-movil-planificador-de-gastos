import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    contenedorPrincipal: {

      backgroundColor: '#F5F5F5',
      flex: 1

    },
    headerApp: {

      backgroundColor: '#3B82F6',
      minHeight: 400

    },
    contenedor: {

        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        transform: [{translateY: 50}],
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
  
        elevation: 14,
      }, 
      imgNuevoPresupuesto: {

        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 40,
        right: 30
      }
})