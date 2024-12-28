import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../src/components/login"; // Adjust the path if needed
import CoursePage from "./components/courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
