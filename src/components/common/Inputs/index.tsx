import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from './LoginInput/styles'


type Props = {
  secureTextEntry?: boolean;
  placeholder: string;
  onChange?: (value: string) => void

}

export default function LoginInput(props: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.viewContainer}>
        <TextInput
          onChangeText={props.onChange}
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
        >

        </TextInput>
      </View>
    </View>
  )
}