import React, { useEffect } from 'react';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import { Container } from './styles';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

export function Splash() {
  const splashAnimation = useSharedValue(0);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0], Extrapolate.CLAMP),
      transform: [
        { translateX: interpolate(splashAnimation.value, [0, 50], [0, -50], Extrapolate.CLAMP) },
      ],
    };
  });
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [0, 1], Extrapolate.CLAMP),
      transform: [
        { translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0], Extrapolate.CLAMP) },
      ],
    };
  });
  function startApp() {
    navigate('Home');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2000 }, () => {
      'worklet';
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={90} height={65} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
