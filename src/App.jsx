import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TypingEffect from "./Components/TypingEffect";
import GoogleForm from "./Components/GoogleForm";
import StudentDashboard from "./Dashboard/StudentDashboard";
import AlumniDashboard from "./Dashboard/AlumniDashboard";
import AdminDashboard from "./Dashboard/AdminDashboard";
import NotFound from "./Components/NotFound";


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
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/alumnidashboard" element={<AlumniDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Router>
  );
}

export default App;
