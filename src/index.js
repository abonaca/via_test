import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Spectrographs from "./pages/Spectrographs";
import Telescopes from "./pages/Telescopes";
import Survey from "./pages/Survey";
import Team from "./pages/Team";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="mission" element={<Mission />} />
        <Route path="spectrographs" element={<Spectrographs />} />
        <Route path="telescopes" element={<Telescopes />} />
        <Route path="survey" element={<Survey />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 
