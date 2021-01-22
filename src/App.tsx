// Base in the tutorial: https://www.youtube.com/watch?v=VqP1ECc_j4M

import React from 'react';

import './styles/GlobalStyles.css';
import Section from './components/Section';
import SideMenu from './components/SideMenu';

import data from './data';

function App() {
  return (
    <>
      <Section 
        variant='Blue'
        title={data[0].title}
        description={data[0].description}
      />
      <Section 
        variant='Beige'
        title={data[1].title}
        description={data[1].description}
      />
      <Section 
        variant='Blue'
        title={data[2].title}
        description={data[2].description}
      />
      <Section 
        variant='White'
        title={data[3].title}
        description={data[3].description}
      />
      <Section 
        variant='Black'
        title={data[4].title}
        description={data[4].description}
      />

      <SideMenu />
    </>
  );
}

export default App;
