import { Routes, Route } from "react-router-dom";

import About from "../pages/about";
import Specialties from "../pages/specialties";
import Projects from "../pages/projects";
import Contacts from "../pages/contacts";

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <About/> } />
      <Route path="/specialties" element={ <Specialties/> } />
      <Route path="/projects" element={ <Projects/> } />
      <Route path="/contacts" element={ <Contacts/> } />
    </Routes>
  );
};

export default RoutesApp;