import { StyleSheet } from "react-native";
import { globalStyles } from '../../styles/index'

export const styles = StyleSheet.create({

    contenedor: {
        backgroundColor: '#1E40AF',
        flex: 1
    },
    formulario: {

        ...globalStyles.contenedor

    },
    titulo: {

        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748B'
    },
    campo: {
        
        marginVertical: 10

    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'

    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10

    },
    submitBtn: {
        backgroundColor: '#3B82F6',
        padding: 10,
        marginTop: 20
    },
    submitBtnText: {

        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        textTransform: 'uppercase'
    }

})