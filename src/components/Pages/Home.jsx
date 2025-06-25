import React from "react";
import Slider from "../Layouts/Slider";
import EduAppContainer from "../EduAppContainer";
import { useLoaderData } from "react-router";
import HealthAppContainer from "../HealthAppContainer";
import GameAppContainer from "../GameAppContainer";
import StatsSection from "../utilities/StatsSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { eduData, healthData, gamingData } = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home</title>
        </Helmet>
      <Slider></Slider>
      <EduAppContainer apps={eduData}></EduAppContainer>
      <HealthAppContainer apps={healthData}></HealthAppContainer>
      <GameAppContainer games={gamingData}></GameAppContainer>
      <StatsSection></StatsSection>
     
    </div>
  );
};

export default Home;
