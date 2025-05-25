import React from 'react';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import NewPlants from '../../components/NewPlants/NewPlants';
import PlantCareMistakes from '../../components/PlantCareMistakes/PlantCareMistakes';
import BeginnerFriendlyPlants from '../../components/BeginnerFriendlyPlants/BeginnerFriendlyPlants';

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <NewPlants />
      <PlantCareMistakes />
      <BeginnerFriendlyPlants/>
    </div>
  );
};

export default Home;