
import { Statistics } from "../../components/Statistics/Statistics";
import { AboutUs } from "../About-us/AboutUs";
import { Collaborate } from "../Collaborate/Collaborate";
import { ForAdoption } from "../For-adoption/ForAdoption";
import { Histories } from "../Histories/Histories";
import { NewLetter } from "../New-letter/NewLetter";
import { Hero } from "../Header/Header";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Statistics />
      <Histories />
      <ForAdoption />
      <Collaborate />
      <NewLetter />
    </>
  );
};
