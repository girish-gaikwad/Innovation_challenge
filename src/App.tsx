import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../src/components/login"; // Adjust the path if needed
import CoursePage from "./components/courses";
import CourseDetailsScreen from "./components/coursedetails";
import PaymentScreen from "./components/payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course-details" element={<CourseDetailsScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
