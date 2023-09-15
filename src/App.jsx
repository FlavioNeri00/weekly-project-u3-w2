import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/search/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
