import React from 'react';
import { Typography, Box, Button } from 'components';
// Store
import { useStore } from 'store';
import { useActions } from '@actions';

const HomePage: React.FC = () => {
  const { dispatch, state } = useStore();
  const { setTheme } = useActions({ dispatch });

  function changeTheme() {
    return state.theme === 'dark' ? setTheme('white') : setTheme('dark');
  }
  return (
    <Box backgroundColor="background" height="100%">
      <Typography.H1>Title</Typography.H1>
      <Typography.H2>SubTitle</Typography.H2>
      <Typography.Text>CommonText</Typography.Text>
      <Button onPress={changeTheme} title="Change Theme" />
    </Box>
  );
};

export default HomePage;
