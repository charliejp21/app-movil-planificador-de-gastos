import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { styles } from './GastoStyles'

const Gasto = ({gasto}) => {

  const {nombre, categoria, cantidad, id} = gasto



  return (

    <View style={styles.contenedorGasto}>
        <Text>{nombre}</Text>
    </View>

  )
}

export default Gasto