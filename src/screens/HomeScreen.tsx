import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { style } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { SimplePokemon } from '../intefaces/PokemonInterfaces';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

<Icon name="rocket" size={30} color="#900" />;

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()
  const { simplePokemons, loadPokemons} = usePokemonPaginated();
  console.log(simplePokemons);
  

  return (
    <>

      <Image
        source={ require('../assets/pokebola.png') }
        style = {style.pokebolaBg}></Image>

        <View
        style={{
          ...style.globalMargin,
          alignItems: 'center'
          }}></View>

        <FlatList
          data={simplePokemons}
          keyExtractor = {(pokemon) => pokemon.id}
          showsHorizontalScrollIndicator={false}
          numColumns = { 2}

          ListHeaderComponent={
            <Text style = { { 
              ...style.title,
              ...style.globalMargin,
              top: top +20,
              marginBottom: top + 20,
              paddingBottom: 10
              } }>Pokedex</Text>
          }

          renderItem=  {({item }) => ( <PokemonCard pokemon={item}></PokemonCard> )}

          onEndReached={ loadPokemons}
          onEndReachedThreshold= {0.4}

          ListFooterComponent = {
              <ActivityIndicator
                 style= {{height:100}}
                 size = {20}
                 color = 'gray'
                 />}
          ></FlatList>

    
   
    </>
  )
}
