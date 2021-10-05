import React from 'react';
import {Image} from 'react-native';

export default function Logo() {
  return (
      <Image
        style={{width: 200, height: 74, marginTop: 10}}
        source={require('../assets/images/pokemon-logo.png')}
      />
  );
}
