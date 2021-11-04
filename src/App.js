import "./App.css";
import Navv from "./Navbar";
import SameAbout from "./About";
import img from "./t.jpg";
function App() {
  return (
    <div className="App">
      <Navv />
      <SameAbout />

      <img src="/th.jpg" alt="gi" />
      <img src={img} alt="gi" />
      <br />
    </div>
  );
}

export default App;
