import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/AllProjectPage";
import ProjectDetails from "./pages/ProjectDetails";
import NavbarLayout from "./layouts/NavbarLayout";
import ContactPage from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavbarLayout/>}>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/projects"} element={<ProjectsPage />}></Route>
          <Route path={"/contact"} element={<ContactPage />}></Route>
        </Route>
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
};

export default App;
