import React, {FC, ReactElement} from "react"
import HeroSection from "../components/HeroSection"
import MainSection from "../components/MainSection"

const App: FC  = ():ReactElement => {
  return (
    <div>
      <HeroSection />
      <MainSection />
    </div>
  );
}

export default App;
