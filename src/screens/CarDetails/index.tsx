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
  About,
  Accessories,
  Footer,
} from './styles';

import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const routes = useRoute();
  const { car } = routes.params as Params;

  function handleScheduling() {
    navigation.navigate('Scheduling');
  }

  function handleBack() {
    navigation.goBack();
  }

  console.log(car.accessories);
  return (
    <Container>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImage>
        <ImageSlider imagesUrl={car.photos} />
      </CarImage>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((acessory) => (
            <Accessory
              name={acessory.name}
              icon={getAccessoryIcon(acessory.type)}
              key={acessory.type}
            />
          ))}
        </Accessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleScheduling} />
      </Footer>
    </Container>
  );
}
