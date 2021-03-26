import React from 'react';
import { StyleProvider } from '@providers/all';
import { SideTop, SideBottom } from '@organisms/all';

const libreFranklinUrl = 'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;900&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[libreFranklinUrl]}>
      <SideTop />
      <SideBottom />
    </StyleProvider>
  );
};

export default Home;
