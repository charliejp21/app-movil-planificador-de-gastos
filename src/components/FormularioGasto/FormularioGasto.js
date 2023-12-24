import React, { useState } from 'react'
import { Text, SafeAreaView, View, TextInput, Pressable } from 'react-native'
import { styles } from './FormularioGastoStyles'
import { Picker } from '@react-native-picker/picker'
const FormularioGasto = ({setModal, handleGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

  return (
    
    <SafeAreaView style={styles.contenedor}>

        <View>
            <Pressable 
             onLongPress={() => setModal(false)}
             style={styles.btnCancelar}>
                <Text style={styles.btnCancelarTexto}>Cancelar</Text>
            </Pressable>
        </View>

        <View style={styles.formulario}>

            <Text style={styles.titulo}>Nuevo Gasto</Text>

            <View style={styles.campo}>
                <Text style={styles.label}>Nombre Gasto</Text>
                <TextInput
                style={styles.input} 
                placeholder='Nombre del gasto. ej. Comida'
                onChangeText={setNombre}
                value={nombre} />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Cantidad Gasto</Text>
                <TextInput
                style={styles.input}  
                placeholder='Cantidad del gasto. ej. 300'
                keyboardType='numeric'
                onChangeText={setCantidad}
                value={cantidad} /> 
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Categoría Gasto</Text>
                <Picker
                 selectedValue={categoria}
                 onValueChange={(itemValue) => {setCategoria(itemValue)}}>
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

            <Pressable 
             style={styles.submitBtn}
             onPress={() => handleGasto({nombre,cantidad,categoria})}>
                <Text style={styles.submitBtnText}>Agregar Gasto</Text>
            </Pressable>

        </View>

    </SafeAreaView>
  )
}

export default FormularioGasto