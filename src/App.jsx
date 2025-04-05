import "./App.css";
import Navbar from "./components/Navbar";
import Rental from "./components/rental";
import Service from "./components/service";
import Team from "./components/team";

function App() {
  return (
    <>
      <Navbar />
      <Service />
      <Rental/>
      <Team/>
    </>
  );
}

export default App;
