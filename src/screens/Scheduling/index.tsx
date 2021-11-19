import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import ArrowSvg from '../../assets/arrow.svg';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function Scheduling() {
  const theme = useTheme();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleSchedulingDetails() {
    navigation.navigate('SchedulingDetails');
  }

  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>18/06/2021</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  );
}
