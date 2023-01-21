import "./assets/css/App.css";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import Humidity from "./pages/Humidity";
import HeaderApp from "./Components/Header.jsx";
import Details from "./pages/Detail.jsx";

import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/humidity/:city" element={<Humidity />}></Route>
          <Route path="/detail/:history" element={<Details />}></Route>
          <Route path="*" element={<h1>Not found!</h1>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
