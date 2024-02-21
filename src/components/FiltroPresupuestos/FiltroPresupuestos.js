import React, { useEffect } from 'react'
import {Text, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { styles } from './FiltroPresupuestosStyles'

const FiltroPresupuestos = ({filtro, setFiltro, gastos, setGastosFiltrados}) => {
  
  useEffect(() => {

    if(filtro === ''){

      setGastosFiltrados([])

    }else{

      let gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)

      setGastosFiltrados(gastosFiltrados)

    }

  }, [filtro])

  return (
   <View style={styles.contenedorFiltro}>

    <Text style={styles.label}>Filtrar gastos</Text>

        <Picker
          selectedValue={filtro}
          onValueChange={(valor) => {

            setFiltro(valor)
          }} >
            
            <Picker.Item label="--Selecione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos varios" value="gvarios" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />

        </Picker>

   </View>
  )
}

export default FiltroPresupuestos