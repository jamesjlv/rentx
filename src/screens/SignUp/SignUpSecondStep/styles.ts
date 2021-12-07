import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${Dimensions.get('screen').height > 700
    ? getStatusBarHeight() + 46 + 'px'
    : getStatusBarHeight() + 24 + 'px'};
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};

  margin-top: ${Dimensions.get('screen').height > 700 ? 60 + 'px' : 36 + 'px'};
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const Form = styled.View`
  width: 100%;

  margin-top: ${Dimensions.get('screen').height > 700 ? 64 + 'px' : 36 + 'px'};
  margin-bottom: 16px;
`;
export const FormTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const FormContainer = styled.View`
  width: 100%;

  margin-top: 24px;
`;
