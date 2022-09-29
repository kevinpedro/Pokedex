import React, { useState, useEffect } from 'react'
import ImageColors from 'react-native-image-colors'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../intefaces/PokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';


const windowsWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}:Props) => {
    
    const [bgColor, setbgColor] = useState('gray')
    const isMounted = useRef(true)
    const navigation = useNavigation()

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, {fallback: 'gray'})
        .then( colors => {
           if (colors.platform === 'android') setbgColor(colors.dominant || 'gray')

        })

        return () => {
            isMounted.current = false;
        }
      
    }, [])
    

  return (

    <TouchableOpacity
        activeOpacity={0.9}
        onPress = {() => navigation.navigate('PokemonScreen', {
            simplePokemon: pokemon,
            color: bgColor})}>
        <View style = {{
            ...styles.cardContainer,
            width: windowsWidth *0.4,
            backgroundColor: bgColor  
        }}>
                <View>
                    <Text style ={styles.name}> 
                    {pokemon.name}
                    {'\n#' +pokemon.id}
                    </Text>

                </View>

                <View style = {styles.pokebolaContainer}>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style= { styles.pokebola}></Image>

                </View>


                    <FadeInImage 
                        uri = {pokemon.picture}
                        style = {styles.pokemon}></FadeInImage>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
        backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom:25,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    name: {
        color: 'white',
        fontSize:20,
        fontWeight: 'bold',
        top: 20,
        left: 10

    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25
     
    },
    pokemon:{
        width:120,
        height:120,
        position: 'absolute',
        right: -8,
        bottom: -10,
        shadowColor: "#000",

    },
    pokebolaContainer:{
        width:100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.6
    }
})

{/* <FadeInImage
              uri={item.picture}
              style={{
                  width:100,
                  height:100
              }}></FadeInImage> */}