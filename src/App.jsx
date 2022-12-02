import { Routes, Route } from "react-router-dom";

import { ModalProvider } from "./context/ModalContext";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Modal from "./components/Modal";

const App = () => {
  return (
    <ModalProvider>
      <Navbar />
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ModalProvider>
  );
};

export default App;
