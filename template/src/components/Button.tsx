import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { Text } from './Typography';

const Button = styled.TouchableOpacity`
  padding: 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Btn: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { title, ...restProps } = props;
  return (
    <Button {...restProps}>
      <Text color="background">{title}</Text>
    </Button>
  );
};

export default Btn;
