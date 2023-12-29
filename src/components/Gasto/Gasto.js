import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { styles } from './GastoStyles'
import { formatearCantidad, formatearFecha } from '../../helpers'


const Gasto = ({gasto}) => {

  const {nombre, categoria, cantidad, fecha} = gasto

  const diccionarioIconos = {

      ahorro: require('../../imgs/icono_ahorro.png'),
      comida: require('../../imgs/icono_comida.png'),
      casa: require('../../imgs/icono_casa.png'),
      comida: require('../../imgs/icono_comida.png'),
      gastos: require('../../imgs/icono_gastos.png'),
      ocio: require('../../imgs/icono_ocio.png'),
      salud: require('../../imgs/icono_salud.png'),
      suscripciones: require('../../imgs/icono_suscripciones.png')
      
  }

  return (

    <View style={styles.contenedorGasto}>

      <View style={styles.contenidoGasto}>

        <View style={styles.contendorImgGasto}>

          <Image style={styles.imgGasto} source={diccionarioIconos[categoria]}/>
          
          <View style={styles.contendorTexto}>
            <Text style={styles.categoria}>{categoria}</Text>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
          </View> 

        </View>

        <Text style={styles.cantidad}>{formatearCantidad(cantidad)}</Text>

      </View>

    </View>

  )
}

export default Gasto