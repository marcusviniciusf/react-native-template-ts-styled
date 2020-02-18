import styled from 'styled-components/native';
import {
  flexbox,
  space,
  layout,
  position,
  color,
  compose,
} from 'styled-system';
// Interfaces
import { CommonInterfaces } from 'interfaces';

const boxProps = compose(
  space,
  color,
  layout,
  flexbox,
  position
);

export const Box = styled.View<CommonInterfaces.BoxInterface>`
  ${boxProps};
`;
