// app/pages.tsx
import React, { Component } from 'react';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';


class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <CategorySection />
      </>
    );
  }
}

export default Home;
