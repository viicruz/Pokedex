import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import LoginInput from '../../components/common/Inputs';
import Button from '../../components/common/Button';
import Footer from '../../components/common/Footer';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

type UserCredentials = {
  email: string;
  password: string;
};

export default function SignUp() {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  function handleAccountCreation() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then((user) => {
        console.log('Cadastrado com sucesso!');
        navigation.navigate('Home' as never);
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao Cadastrar!');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Pokédex</Text>
      <View style={styles.inputWrapper}>
        <LoginInput
          placeholder="Username"
          secureTextEntry={false}
        />
        <LoginInput
          placeholder="Email"
          secureTextEntry={false}
          onChange={(value) => {
            setUserCredentials({
              ...userCredentials,
              email: value,
            });
          }}
        />
        <LoginInput
          placeholder="Senha"
          secureTextEntry={true}
          onChange={(value) => {
            setUserCredentials({
              ...userCredentials,
              password: value,
            });
          }}
        />
        <Button name="Entrar" onPress={handleAccountCreation} />
      </View>
      <Footer textName="Don't have an account?" buttonName="Sign Up" goTo="Login" />
    </View>
  );
}