import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import {styles} from './ControlPresupuestoStyles'
import { globalStyles } from '../../styles'
import { formatearCantidad } from '../../helpers'

const ControlPresupuesto = ({presupuesto}) => {

    const [disponible, SetDisponible] = useState(0)

    const [gastado, SetGastado] = useState(0)
 
    return (
    <View style={globalStyles.contenedor}>

        <View style={styles.centrarGrafica}>

            <Image 
            style={styles.image}
            source={require('../../imgs/grafico.jpg')}/>

        </View>

        <View style={styles.contenedorTexto}>

          <Text style={styles.valor}>
            <Text style={styles.label}>Presupuesto: </Text>
            {formatearCantidad(presupuesto)}
          </Text>

          <Text style={styles.valor}>
            <Text style={styles.label}>Disponible: </Text>
            {formatearCantidad(disponible)}
          </Text>

          <Text style={styles.valor}>
            <Text style={styles.label}>Gastado: </Text>
            {formatearCantidad(gastado)}
          </Text>

        </View>


    </View>
    
  )
}

export default ControlPresupuesto