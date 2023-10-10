import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from './styles';

type Props = {
    icon: React.ReactNode
    onSearch: (text:string) => void
}



export default function SearchBar(props: Props) {
    return (
        <View style={styles.wrap}>
            <View style={styles.inputContainer}>
                <View>
                {props.icon}
                </View>    
                <TextInput placeholder='Pesquisar...' onChangeText={props.onSearch}/>
            </View>



        </View>
    )
}