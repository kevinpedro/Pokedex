import React from 'react'
import { View, StyleSheet, Text, TextInput, StyleProp, ViewStyle } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

interface Props {
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ({style}: Props) => {
  return (
    <View style = {{
        ...styles.container,
        ...style as any
    }}>
       <View style= {styles.textBackground}>
            <TextInput
                placeholder='Buscar Pokemon'
                style= { styles.textInput}
                autoCapitalize= 'none'
                autoCorrect= {false}></TextInput>

                <Icon
                    name='search-outline'
                    color={'gray'}
                    size= {30}></Icon>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        top: 10
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    textInput:{
        flex: 1,
        fontSize: 18,
    }
})
