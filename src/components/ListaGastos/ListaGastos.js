import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './ListaGastosStyles'
import Gasto from '../Gasto/Gasto'
const ListaGastos = ({gastos, setModal, setGasto, filtro, gastosFiltrados}) => {
  return (

        <View style={styles.contenedorGastos}>

            <Text style={styles.tituloGastos}>Gastos</Text>

            { filtro ? gastosFiltrados.map( gasto => (

              <Gasto 
              key={gasto.id}
              gasto={gasto} 
              setModal={setModal}
              setGasto={setGasto} /> 

            )) : gastos.map( gasto => (

              <Gasto 
              key={gasto.id}
              gasto={gasto} 
              setModal={setModal}
              setGasto={setGasto} /> 

            ))}

            {gastos.length === 0 || gastosFiltrados.length === 0 && (

              <Text style={styles.noGastos}>No hay gatos</Text>
            )
            }

        </View>
  )
}

export default ListaGastos