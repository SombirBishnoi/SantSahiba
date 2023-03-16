import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Herdar from "./components/Herdar";
import Lodder from "./components/Lodder";

import Buy from "./components/Buy";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Lodder />
      <Herdar />
      <Buy />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </>
  );
}

export default App;
