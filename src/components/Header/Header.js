import React from 'react'
import { Text, SafeAreaView} from 'react-native'
import { styles } from './HeaderStyles'; 

const Header = () => {
  return (
  
    <SafeAreaView style={styles.header}>

        <Text style={styles.texto}>Planificador de gastos</Text>

    </SafeAreaView>
    
  )
}

export default Header