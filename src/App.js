import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DadJokePage from "./pages/DadJokePage";
import KittyPicPage from "./pages/KittyPicPage"
import CalmingVideoPage from "./pages/CalmingVideoPage";
import InspQuotePage from "./pages/InspQuotePage";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />     
        <Route path="about" element={<AboutPage />} />
        <Route path="contactus" element={<ContactPage />} />

        <Route path="dadjoke" element={<DadJokePage />} />
        <Route path="kittypic" element={<KittyPicPage />} />
        <Route path="calmingvideo" element={<CalmingVideoPage />} />
        <Route path="inspquote" element={<InspQuotePage />} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
