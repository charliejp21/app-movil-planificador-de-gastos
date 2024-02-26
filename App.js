import React, { useEffect, useState } from 'react'
import {Alert, Pressable, View, Image, Modal, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './src/components/Header/Header'
import NuevoPresupuesto from './src/components/NuevoPresupuesto/NuevoPresupuesto'
import ControlPresupuesto from './src/components/ControlPresupuesto/ControlPresupuesto'
import FormularioGasto from './src/components/FormularioGasto/FormularioGasto'
import ListaGastos from './src/components/ListaGastos/ListaGastos'
import FiltroPresupuestos from './src/components/FiltroPresupuestos/FiltroPresupuestos'
import { globalStyles } from './src/styles/index'
import { generarId } from './src/helpers'

const App = () => {

  const [isValidPrespuesto, setIsValidPresupuesto] = useState(false)

  const [presupuesto, setPresupuesto] = useState('')

  const [gastos, setGastos] = useState([])

  const [modal, setModal] = useState(false)

  const [gasto, setGasto] = useState({})

  const [filtro, setFiltro] = useState('')

  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {

    const obtenerPresupuesto = async () => {

      try {

        const presupuestoStorage = await AsyncStorage.getItem('planificador_prespuesto') ?? 0

        if(presupuestoStorage > 0) {

          setPresupuesto(presupuestoStorage)

          setIsValidPresupuesto(true)
        }
        
      } catch (error) {

        console.log(error)
        
      }

    }

    obtenerPresupuesto()

  }, [])

  useEffect(() => {

    const guardarGastosStorage = async() => {

      try {

        await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos)) ?? 0
        
      } catch(error) {

        console.log(error)
        
      }

    }
    
    guardarGastosStorage()

  }, [gastos])

  useEffect(()=>{
    
    const obtenerDatosStorage = async() => {
     
      try {

        const gastosStorage = await AsyncStorage.getItem('planificador_gastos')

        setGastos(gastosStorage ? JSON.parse(gastosStorage) : [])
        
      } catch (error) {

        console.log(error)
        
      }
      
    }

    obtenerDatosStorage()

  }, [])

  useEffect(()=> {

    if(isValidPrespuesto){

      const savePresupuesto = async () => {

        try {

          await AsyncStorage.setItem('planificador_prespuesto', presupuesto)
          
        } catch (error) {

          console.log(error)
          
        }
      }
      
      savePresupuesto()

    }

  }, [isValidPrespuesto])

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
          
        {isValidPrespuesto && ( 

          <>
          
          <FiltroPresupuestos
            filtro={filtro} 
            setFiltro={setFiltro}
            gastos={gastos}
            setGastosFiltrados={setGastosFiltrados} />

          <ListaGastos
           gastos={gastos}
           setModal={setModal}
           setGasto={setGasto}
           filtro={filtro}
           gastosFiltrados={gastosFiltrados} />
           
          </>
        )} 

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