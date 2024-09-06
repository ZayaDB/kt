import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Sidemenu from "./components/sidemenu/Sidemenu";
import Footer from "./components/footer/Footer";
import Cover from "./components/background/Cover";
import Carousel from "./components/Carousel";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/header" element={<Header />} />
        <Route path="/sidemenu" element={<Sidemenu />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </div>
  );
}

export default App;
