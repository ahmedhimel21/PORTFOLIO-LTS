import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
        </div>
        <div className="relative z-[-1]">
          <About></About>
          <Experience></Experience>
          <Tech></Tech>
          <Works></Works>
        </div>
        <div className="relative z-[-1]">
          <Contact></Contact>
          <StarsCanvas></StarsCanvas>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
