import React, { useState } from 'react'
import {Alert, Pressable, View, Image, Modal, ScrollView } from 'react-native'
import Header from './src/components/Header/Header'
import NuevoPresupuesto from './src/components/NuevoPresupuesto/NuevoPresupuesto'
import ControlPresupuesto from './src/components/ControlPresupuesto/ControlPresupuesto'
import FormularioGasto from './src/components/FormularioGasto/FormularioGasto'
import ListaGastos from './src/components/ListaGastos/ListaGastos'
import { globalStyles } from './src/styles/index'
import { generarId } from './src/helpers'

const App = () => {

  const [isValidPrespuesto, setIsValidPresupuesto] = useState(false)

  const [presupuesto, setPresupuesto] = useState('')

  const [gastos, setGastos] = useState([])

  const [modal, setModal] = useState(false)

  const [gasto, setGasto] = useState({})

  const handleNuevoPresupuesto = (presupuesto) => {

    if(Number(presupuesto) > 0){

      setIsValidPresupuesto(true)

    }else{

      return Alert.alert('Error', 'El presupuesto no puede ser 0 o menor')
    }

  }

  const handleGasto = (gasto) => {

    if([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')){

      return Alert.alert("Error", "Todos los campos son obligatorios")

    }

    if(gasto.id){

      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)

      setGastos(gastosActualizados)

      setModal(!modal)

      return Alert.alert("Gasto editado", "Gasto editado exitosamente")

    }else{

      gasto.id = generarId()
      
      gasto.fecha = Date.now()

      setGastos([...gastos, gasto])

      setModal(!modal)

      return Alert.alert("Gasto registrado", "Gasto registrado exitosamente")

    }

  }

  const eliminarGasto = (id) => {

    Alert.alert(
      "¿Deseas eliminar este gasto",
      "La información no podrá recuperarse", 
      [{text: 'No', style: 'cancel', },
       {text: 'Sí, eliminar',
        onPress: () => {
          const deleteGasto = gastos.filter(gasto => gasto.id !== id)
          setGastos(deleteGasto)
          setModal(!modal)
          setGasto({})
          return Alert.alert("Gasto eliminado", "Gasto eliminado exitosamente")
        } 
        }])

  }

  return (
    <View style={globalStyles.contenedorPrincipal}>

      <ScrollView>

        <View style={globalStyles.headerApp}>

          <Header />

          {isValidPrespuesto ? 
          
          (<ControlPresupuesto 
            presupuesto={presupuesto}
            gastos={gastos}
            />) :

          (<NuevoPresupuesto 
            handleNuevoPresupuesto = {handleNuevoPresupuesto}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto} />) }

        </View>
          
        {isValidPrespuesto && 

          <ListaGastos
           gastos={gastos}
           setModal={setModal}
           setGasto={setGasto} />
        } 

      </ScrollView>

        {modal && 
          <Modal 
           animationType='slide'
           visible={modal}
           onRequestClose={() => {
            setModal(!modal)
           }}>

            <FormularioGasto 
             setModal={setModal}
             handleGasto={handleGasto}
             setGasto={setGasto} 
             gasto={gasto}
             eliminarGasto={eliminarGasto} />

          </Modal>
        }

        {isValidPrespuesto && 

          <Pressable
           style={globalStyles.btnAgregar}
           onPress={() => setModal(!modal)}>

            <Image 
             style={globalStyles.imgNuevoPresupuesto}
             source={require('./src/imgs/nuevo-gasto.png')} />
            
          </Pressable>
          
        }

    </View>
  )
}


export default App