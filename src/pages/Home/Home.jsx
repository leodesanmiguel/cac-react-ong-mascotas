import { Statistics } from "../../components/Statistics/Statistics";
import { AboutUs } from "../About-us/AboutUs";
import { Collaborate } from "../Collaborate/Collaborate";
import { Histories } from "../Histories/Histories";
import Main from "../../components/Main/Main";

export const Home = () => {
  return (
    <>
      <Main />
      <AboutUs />
      <Statistics />
      <Histories />
      <Collaborate />
      
    </>
  );
};
