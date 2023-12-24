import React, { useState } from 'react'
import {Alert, Pressable, View, Image, Modal } from 'react-native'
import Header from './src/components/Header/Header'
import NuevoPresupuesto from './src/components/NuevoPresupuesto/NuevoPresupuesto'
import ControlPresupuesto from './src/components/ControlPresupuesto/ControlPresupuesto'
import FormularioGasto from './src/components/FormularioGasto/FormularioGasto'
import { globalStyles } from './src/styles/index'

const App = () => {

  const [isValidPrespuesto, setIsValidPresupuesto] = useState(false)

  const [presupuesto, setPresupuesto] = useState(0)

  const [gastos, setGastos] = useState([])

  const [modal, setModal] = useState(false)

  const handleNuevoPresupuesto = (presupuesto) => {

    if(Number(presupuesto) > 0){

      setIsValidPresupuesto(true)

    }else{

      return Alert.alert('Error', 'El presupuesto no puede ser 0 o menor')
    }

  }

  return (
    <View style={globalStyles.contenedorPrincipal}>

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

        {modal && 
          <Modal 
           animationType='slide'
           visible={modal}>

            <FormularioGasto />

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