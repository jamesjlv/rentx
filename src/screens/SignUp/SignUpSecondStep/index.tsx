import React, { useState } from 'react';
import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
  FormContainer,
} from './styles';
import { BackButton } from '../../../components/BackButton';
import { useNavigation, NavigationProp, ParamListBase, useRoute } from '@react-navigation/core';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';
import { api } from '../../../services/api';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigate: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const { user } = route.params as Params;

  function handleBack() {
    navigate.goBack();
  }

  async function handleRegister() {
    if (!passwordRepeat || !password) {
      Alert.alert('Atenção!', 'Preencha os campos de senha e repetição de senha');
    }
    if (password !== passwordRepeat) {
      Alert.alert('Atenção!', 'As senhas não são iguais');
    }
    await api
      .post('/users', {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      .then(() => {
        navigate.navigate('Confirmation', {
          title: 'Conta criada!',
          message: '',
          nextScreenRoute: 'SignIn',
        });
      })
      .catch(() => {
        Alert.alert('Opa', 'Não foi possivel cadastrar');
      });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>
          <Title>
            Crie sua {'\n'}
            conta
          </Title>
          <SubTitle>
            Faça seu cadastro de {'\n'}
            forma rápida e fácil.
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <FormContainer>
              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
              <PasswordInput
                iconName="lock"
                placeholder="Repetir senha"
                onChangeText={setPasswordRepeat}
                value={passwordRepeat}
              />
            </FormContainer>
          </Form>

          <Button title="Cadastrar" color={theme.colors.success} onPress={handleRegister} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
