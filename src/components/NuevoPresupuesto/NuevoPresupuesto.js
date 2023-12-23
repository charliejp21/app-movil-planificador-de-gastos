import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import {styles} from './NuevoPresupuestoStyles'
import { globalStyles } from '../../styles'

const NuevoPresupuesto = ({handleNuevoPresupuesto, presupuesto, setPresupuesto}) => {

  return (
    <View  style={globalStyles.contenedor}>

        <Text style={styles.label}>Definir nuevo presupuesto</Text>

        <TextInput 
        keyboardType='numeric'
        placeholder='Agregar presupuesto: Ej. 300'
        style={styles.input}
        value={presupuesto.toString()}
        onChangeText={setPresupuesto} />

        <Pressable 
        style={styles.boton}
        onPress={() => handleNuevoPresupuesto(presupuesto)}>

          <Text style={styles.textoBoton}>Agregar prespuesto</Text>

        </Pressable>

    </View>
  )
}

export default NuevoPresupuesto