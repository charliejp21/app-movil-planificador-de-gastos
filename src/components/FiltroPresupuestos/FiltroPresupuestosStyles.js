import { StyleSheet } from "react-native";
import { globalStyles } from '../../styles/index'

export const styles = StyleSheet.create({

    contenedorFiltro: {

        ...globalStyles.contenedor,
        transform: [{translateY: 0}],
        marginTop: 80

    },
    label: {

        fontSize: 22,
        fontWeight: '900',
        color: '#64748B'

    }
   
})