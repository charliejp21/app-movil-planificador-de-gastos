import React, { useEffect, useState } from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import {styles} from './ControlPresupuestoStyles'
import { globalStyles } from '../../styles'
import { formatearCantidad } from '../../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'

const ControlPresupuesto = ({presupuesto, gastos, reiniciarApp}) => {

    const [disponible, setDisponible] = useState(0)

    const [gastado, setGastado] = useState(0)

    const [porcentaje, setPorcentaje] = useState(0)

    useEffect( ()  => {

        const totalGastado = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0)

        const totalDisponible = presupuesto - totalGastado

        const nuevoPorcentaje = (

          ((presupuesto - totalDisponible) / presupuesto) * 100
        )
        
        setTimeout(() => {

          setPorcentaje(nuevoPorcentaje)

        }, 1000)

        setDisponible(totalDisponible)
        
        setGastado(totalGastado)

    }, [gastos])

 
    return (
    <View style={globalStyles.contenedor}>

        <View style={styles.centrarGrafica}>
          <CircularProgress
           value={porcentaje}
           duration={1500}
           radius={150}
           valueSuffix={'%'}
           title='Gastado'
           inActiveStrokeColor='#F5F5F5'
           inActiveStrokeWidth={20}
           activeStrokeColor='#3b82f6'
           activeStrokeWidth={20}
           titleStyle={{fontWeight: 'bold', fontSize: 20}}
           titleColor='#64748B' />
        </View>

        <View style={styles.contenedorTexto}>

          <Pressable style={styles.boton}
            onLongPress={reiniciarApp}>
            <Text style={styles.textoBoton}>Reinicar APP</Text>
          </Pressable>

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