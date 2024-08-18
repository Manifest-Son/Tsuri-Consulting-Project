import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Schedule from "./pages/Schedule/Schedule";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/Home/AboutUs";
import Request from "./components/Request/Request";
import BookDisplay from "./components/Book/BookDisplay";
import Admin from "./pages/Admin/Admin";
import UpdateGallery from "./pages/Admin/Galleria/UpdateGallery";
import UpdateSchedule from "./pages/Admin/Schedule/UpdateSchedule";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/request" element={<Request />} />
          <Route path="/book" element={<BookDisplay />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="gallery/update/:id" element={<UpdateGallery />} />
          <Route path="schedule/update/:id" element={<UpdateSchedule />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
