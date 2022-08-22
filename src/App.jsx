import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import Courses from "./component/courses/Courses";
import Contact from "./component/Contact/Contact";
import Services from "./component/Services/Services";
import Testimonials from "./component/Testimonials/Testimonials";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./component/Pages/AboutPage/AboutPage";
import { ServicesPage } from "./component/Pages/ServicesPage/ServicesPage";
import { ContactUsPage } from "./component/Pages/ContactUsPage/ContactUsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Courses />
      <Testimonials />

      <Contact />
      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/contactus" element={<ContactUsPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
