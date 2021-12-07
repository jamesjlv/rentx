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
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/core';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Yup from 'yup';

export function SignUpFirstStep() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('E-mail é inválido').required('E-mail obrigatório'),
        driverLicense: Yup.string().required('CNH é obrigatória'),
      });

      const data = { name, email, driverLicense };

      await schema.validate(data);

      navigation.navigate('SignUpSecondStep', { user: data });
    } catch (error) {
      if (error) {
        if (error instanceof Yup.ValidationError) {
          return Alert.alert('Opa', error.message);
        }
      }
    }
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
            <FormTitle>1. Dados</FormTitle>
            <FormContainer>
              <Input placeholder="Nome" iconName="user" onChangeText={setName} value={name} />
              <Input
                placeholder="E-mail"
                iconName="mail"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
              />
              <Input
                placeholder="CNH"
                iconName="credit-card"
                keyboardType="number-pad"
                onChangeText={setDriverLicense}
                value={driverLicense}
              />
            </FormContainer>
          </Form>
          <Button title="Próximo" onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
