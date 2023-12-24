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

  const handleNuevoPresupuesto = (presupuesto) => {

    if(Number(presupuesto) > 0){

      setIsValidPresupuesto(true)

    }else{

      return Alert.alert('Error', 'El presupuesto no puede ser 0 o menor')
    }

  }

  const handleGasto = (gasto) => {

    if(Object.values(gasto).includes('')){

      return Alert.alert("Error", "Todos los campos son obligatorios")

    }

    gasto.id = generarId()

    setGastos([...gastos, gasto])

    setModal(!modal)

    return Alert.alert("Gasto registrado", "Gasto registrado exitosamente")

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
           gastos={gastos} />
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
             handleGasto={handleGasto}/>

          </Modal>
        }

        {isValidPrespuesto && 

          <Pressable
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