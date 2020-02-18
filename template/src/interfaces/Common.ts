import {
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

export type BoxInterface = FlexboxProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps;

export type TextProps = SpaceProps & TypographyProps & ColorProps;
