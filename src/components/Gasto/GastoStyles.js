import { StyleSheet } from "react-native";
import { globalStyles } from '../../styles/index'

export const styles = StyleSheet.create({

    contenedorGasto: {

        ...globalStyles.contenedor,
        marginBottom: 20

    },
    contenidoGasto: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contendorImgGasto:{
        
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1

    },
    imgGasto:{

        width:80,
        height: 80,
        marginRight: 20

    },
    contendorTexto: {

        flex: 1,
    },
    categoria: {

        color: '#94A3B8',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    nombre: {

        fontSize: 22,
        color: '#64748B'

    },
    cantidad: {

        fontSize: 20,
        fontWeight: '700'
    },
    fecha: {

        fontWeight: '700',
        color: '#DB2777'
    }



})