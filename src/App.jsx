import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Restaurant from "./pages/Restaurants/Restaurant";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/quote" element={<p>quote</p>} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/foods" element={<p>foods</p>} />
          <Route path="/contact" element={<p>contact</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
