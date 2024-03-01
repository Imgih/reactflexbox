import React from "react";
import { StyleSheet, View } from "react-native";



const QuadradoPequeno = (props) => {
    const {cor} = props;
    return (
        <View style={{...styles.pequeno,
            width: undefined, 
        backgroundColor: `${cor}`}}/>
      
        
    );
}

const QuadradoMedio = () => {
    return (
        <View style={styles.medio}/>

        
    );
}
const QuadradoGrande = () => {
    return (
        <View style={styles.grande}/>

        
    );
}

const Quadrado = () => {
    return (
        <View style={StyleSheet.container}>
            <QuadradoPequeno cor={'blue'}/>
            <QuadradoPequeno cor={'red'}/>
            <QuadradoPequeno cor={'purple'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    pequeno:{
        width: 50,
        height: 50,
        
    },
    medio:{
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    grande:{
        width: 150,
        height: 150,
        backgroundColor: 'purple'
    },
})

export default Quadrado;