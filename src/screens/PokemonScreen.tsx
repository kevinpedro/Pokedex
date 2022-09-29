import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetalle } from '../components/PokemonDetalle';

interface Props extends StackScreenProps <RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ({navigation, route}: Props) => {
  
  const {simplePokemon, color} = route.params;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(simplePokemon.id);
  console.log(pokemon);
  

  return (
    <View style = {{flex: 1}}>
      <View style= {{
        ...styles.container,
        backgroundColor: color,
      
      }}>

        <TouchableOpacity 
        onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style = {{...styles.backButton,
            top: top + 15}}>

            <Icon
              name= "arrow-back-outline"
              color= "white"
              size={ 30 }></Icon>

        </TouchableOpacity>

        <Text style={{
          ...styles.pokemonName,
          top: top + 40  }}>
          {simplePokemon.name+ '\n'}#{simplePokemon.id}
        </Text>

        <Image 
          source={require('../assets/pokebola-blanca.png')}
          style = {{
            ...styles.pokebola
          }}></Image>

          <FadeInImage
            uri={simplePokemon.picture}
            style = {{
              ...styles.pokemonImage
            }}></FadeInImage>

      </View>

            {
              isLoading 
              ?(
            <View style = {styles.cargando} >
              <ActivityIndicator 
              color={ color}
              size = {50}></ActivityIndicator>
            </View>
              )
              : <PokemonDetalle
                  pokemon={pokemon}></PokemonDetalle>
            }


    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    height:370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButton:{
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokebola:{
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7
  },
  pokemonImage:{
    width: 250,
    height:250,
    position:'absolute',
    bottom: -15
  },
  cargando: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
