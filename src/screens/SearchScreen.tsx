import React from 'react'
import { ActivityIndicator, Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { style as globalStyles, style } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

  const {top} = useSafeAreaInsets()
  const {isFetching, simplePokemons}  =usePokemonSearch()

  if(isFetching){
    return <Loading></Loading>
  }

  return (
    <View style={{
        flex: 1,
        marginHorizontal: 2}}>
        <SearchInput
          style = {{
            position: 'absolute',
            zIndex: 999,
            width: screenWidth -40,
            left: 20,
            top: top + 10
          }}></SearchInput>

        <FlatList
          data={simplePokemons}
          keyExtractor = {(pokemon) => pokemon.id}
          showsHorizontalScrollIndicator={false}
          numColumns = { 2}

          ListHeaderComponent={
            <Text style = { { 
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              top: top +20,
              marginBottom: top + 20,
              paddingBottom: 10,
              marginTop: top + 40
              } }>Pokedex</Text>
          }

          renderItem=  {({item }) => ( <PokemonCard pokemon={item}></PokemonCard> )}


          ></FlatList>
    </View>
  )
}
