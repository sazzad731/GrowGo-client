import React from 'react';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import NewPlants from '../../components/NewPlants/NewPlants';
import PlantCareMistakes from '../../components/PlantCareMistakes/PlantCareMistakes';

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <NewPlants />
      <PlantCareMistakes/>
    </div>
  );
};

export default Home;