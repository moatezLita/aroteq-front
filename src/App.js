import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/navbar";
import Home from "./components/home";
import Conge from "./components/conge";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Home/>
        <Conge/>
      </div>
    </div>
  );
}

export default App;
