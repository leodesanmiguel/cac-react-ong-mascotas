import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/About-us/AboutUs";
import { Collaborate } from "./pages/Collaborate/Collaborate";
import { Cardlist } from "./components/History-List/Cardlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="collaborate" element={<Collaborate />}></Route>
          <Route path="historias"  element={<Cardlist />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
