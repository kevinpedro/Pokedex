import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../intefaces/PokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetalle = ({pokemon}: Props) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator = {false}
        style={{
            ...StyleSheet.absoluteFillObject
        }}>

            <View style = {{
                ...styles.container,
                marginTop: 370
            }}>
                <Text style= {styles.title}>Types</Text>
               <View style= {{ flexDirection: 'row'}}>
 
                    {
                        pokemon.types.map(({type}) => (
                            <Text
                            style = {{
                                ...styles.typeText,
                                marginRight: 10}}
                                key = { type.name }>
                                { type.name }
                            </Text>
                        ))
                    }
             


               </View>

                <Text style= {styles.title}>Peso</Text>
                <Text style= {styles.typeText}>{pokemon.weight}kg</Text>
            
            </View>

            <View style = {{
                ...styles.container
            }}>
            <Text style= {styles.title}>Sprites</Text>
            </View>

            <ScrollView
                // style = {}
                horizontal = {true}
                showsHorizontalScrollIndicator= {false}
                >
                <FadeInImage 
                    uri={pokemon.sprites.front_default}
                    style= {styles.basicSprite}></FadeInImage>

                    <FadeInImage 
                    uri={pokemon.sprites.back_default}
                    style= {styles.basicSprite}></FadeInImage>
                    
                    <FadeInImage 
                    uri={pokemon.sprites.front_shiny}
                    style= {styles.basicSprite}></FadeInImage>

                    <FadeInImage 
                    uri={pokemon.sprites.back_shiny}
                    style= {styles.basicSprite}></FadeInImage>
                    
            </ScrollView>

            <View style = {{
                ...styles.container
            }}>
                <Text style= {styles.title}>Habilidades base</Text>
                <View style= {{ flexDirection: 'row'}}>
               
                    {
                        pokemon.abilities.map(({ability}) => (
                            <Text
                            style = {{
                                ...styles.typeText,
                                marginRight: 10}}
                                key = { ability.name}>
                                { ability.name }
                            </Text>
                        ))
                    }
              


               </View>
            </View>

            <View style = {{
                ...styles.container
            }}>
                <Text style= {styles.title}>Movimientos</Text>
                <View style= {{ flexDirection: 'row', flexWrap: 'wrap'}}>
              
                    {
                        pokemon.moves.map(({move}) => (
                            <Text
                            style = {{
                                ...styles.typeText,
                                marginRight: 10}}
                                key = { move.name}>
                                { move.name }  
                            </Text>
                        ))
                    }
                


               </View>
            </View>

            <View style = {{
                ...styles.container
            }}>
                <Text style= {styles.title}>Stats</Text>
                <View>
            
                    {
                        pokemon.stats.map((stat, id) => (
                           <View key={stat.stat.name + id}
                                style = { {flexDirection: 'row'}}>
                             <Text
                            style = {{
                                ...styles.typeText,
                                marginRight: 10,
                                width: 150}}
                                key = { stat.stat.name}>
                                { stat.stat.name }  
                            </Text>
                            
                            <Text
                            style = {{
                                ...styles.typeText,
                                fontWeight: 'bold',
                                }}>

                                { stat.base_stat}  
                            </Text>

                           </View>
                        ))
                    }
                


               </View>
                    <View style = {{
                        marginBottom: 20,
                        alignItems: 'center'
                    }}>  
                        <FadeInImage 
                                uri={pokemon.sprites.front_default}
                                style= {styles.basicSprite}></FadeInImage>
                    </View> 

            </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    typeText:{
        fontSize: 19,
    },
    basicSprite:{
        width: 100,
        height:100
    }
})