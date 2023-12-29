import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './ListaGastosStyles'
import Gasto from '../Gasto/Gasto'
const ListaGastos = ({gastos}) => {
  return (

        <View style={styles.contenedorGastos}>

            <Text style={styles.tituloGastos}>Gastos</Text>

            {gastos.length === 0 ? 
                <Text style={styles.noGastos}>No hay gastos para mostrar</Text> : 
                gastos.map(gasto => (

                <Gasto 
                  key={gasto.id}
                  gasto={gasto} /> ))
            }

        </View>
  )
}

export default ListaGastos