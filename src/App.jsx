import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TypingEffect from "./Components/TypingEffect";
import GoogleForm from "./Components/GoogleForm";
import AlumniSurvey from "./Components/AlumniSurvey";
import StudentDashboard from "./Dashboard/StudentDashboard";
import AlumniDashboard from "./Dashboard/AlumniDashboard";
import AdminDashboard from "./Dashboard/AdminDashboard";
import NotFound from "./Components/NotFound";
import AlumniDirectory from "./Components/AlumniDirectory";
import StudentData from"./Components/StudentData";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/typingeffect" element={<TypingEffect />} />
        <Route path="/googleform" element={<GoogleForm />} />
        <Route path="/alumnisurvey" element={<AlumniSurvey />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/alumnidashboard" element={<AlumniDashboard />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/studentdata" element={<StudentData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Router>
  );
}

export default App;
