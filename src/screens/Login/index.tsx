import { useState } from 'react'
import { View, Text, Image } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native";
import LoginInput from '../../components/common/Inputs'
import Button from '../../components/common/Button'
import Footer from '../../components/common/Footer'
import firebase from '../../services/firebaseConnection';
import { ISDEV } from '../../variables';

type Props = {}

export default function Login({ }: Props) {
  const navigation = useNavigation();
  if(ISDEV){
    navigation.navigate('HomeStack' as never);
  }

  const [userCredentials, setUserCredentials] = useState({
    email: "", password: "", name: ""
  });
   
  function handleLogin() {
    // Aqui fazemos o login
    firebase.auth().signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then((user) => {
        // props.changeStatus(user.user.uid)
        if (!user) return;
        if (!user.user) return;
        // add user to store

        console.log("Login feito com sucesso!")
        navigation.navigate('HomeStack' as never)

      })
      .catch((err) => {
        console.log(err);
        alert('Email ou senha não cadastrados!');
        return;
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Welcome</Text>
      <View style={styles.inputWrapper}>
        <LoginInput placeholder='Email' onChange={(value) => {
          setUserCredentials({
            ...userCredentials, email: value
          })
        }} secureTextEntry={false} />
        <LoginInput onChange={(value) => {
          setUserCredentials({
            ...userCredentials, password: value
          })
        }} placeholder='Senha' secureTextEntry={true} />
        <Button name='Entrar' onPress={handleLogin} />
      </View>
      <Footer textName="Don't have an account?" buttonName="Sign Up" goTo="SignUp" />

    </View>

  )
}