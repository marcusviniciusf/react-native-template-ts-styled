import React from 'react';
// Store
import StoreProvider from 'store';
// UI
import ThemeProvider from 'components/ThemeProvider';
import Routes from './routes';

declare var global: { HermesInternal: null | {} };

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
