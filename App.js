import React, { useState } from 'react'
import {Alert, View } from 'react-native'
import Header from './src/components/Header/Header'
import NuevoPresupuesto from './src/components/NuevoPresupuesto/NuevoPresupuesto'
import ControlPresupuesto from './src/components/ControlPresupuesto/ControlPresupuesto'
import { globalStyles } from './src/styles'

const App = () => {

  const [isValidPrespuesto, setIsValidPresupuesto] = useState(false)

  const [presupuesto, setPresupuesto] = useState(0)

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
          presupuesto={presupuesto} />) :

        (<NuevoPresupuesto 
          handleNuevoPresupuesto = {handleNuevoPresupuesto}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto} />) }

      </View>

    </View>
  )
}


export default App