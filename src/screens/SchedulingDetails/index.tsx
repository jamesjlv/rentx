import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import { Feather } from '@expo/vector-icons';
import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirmRent() {
    navigation.navigate('SchedulingComplete');
  }
  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImage>
        <ImageSlider
          imagesUrl={[
            'https://www.pngkey.com/png/full/121-1219235_corvette-car-png-hd-2018-chevrolet-corvette-z06.png',
          ]}
        />
      </CarImage>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborguine</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={24} color={theme.colors.shape} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.title} />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1.740</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Confirmar" color={theme.colors.success} onPress={handleConfirmRent} />
      </Footer>
    </Container>
  );
}
