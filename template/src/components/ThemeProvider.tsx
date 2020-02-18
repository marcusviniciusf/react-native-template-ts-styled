import React from 'react';
import { ThemeProvider } from 'styled-components';
// Store
import { useStore } from 'store';
// Themes
import { Theme } from 'assets';

const Provider: React.FC = props => {
  const { children } = props;
  const { state } = useStore();
  const theme = Theme(state.theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
