// import React from "react";
import Hero from "../../components/Hero/Hero";
import HomeCollection from "../../components/HomeCollection/HomeCollection";
import BestSeller from "../../components/LatestCollection/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <HomeCollection />
    </div>
  );
};

export default Home;
