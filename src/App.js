import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
