import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler'

interface ButtonProps extends RectButtonProperties {
    children?: string;
}

const FbButton: React.FC<ButtonProps> = () => {
  return <div></div>;
}

export default FbButton;