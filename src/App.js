import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Vision from "./Components/Vision";
import Numbers from "./Components/Numbers";
import Newsletter from "./Components/NewsLetter";
import Projects from "./Components/Projects";
import Activity from "./Components/Activity";
import Actualites from "./Components/Actualites";

function App() {
  return (
    <div>
      <Home />
      <Numbers />
      <Vision />
      <Activity />
      <Projects />
      <Actualites />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
