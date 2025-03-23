import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TypingEffect from "./Components/TypingEffect";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import AlumniDashboard from "./Dashboard/Alumni/AlumniDashboard";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
import NotFound from "./Components/NotFound";
import AlumniDirectory from "./Components/AlumniDirectory";
import StudentData from"./Dashboard/Admin/StudentData";
import AlumniData from"./Dashboard/Admin/AlumniData";
import StudentFeedback from"./Feedbacks/StudentFeedback";
import AlumniSurveyForm from "./Feedbacks/AlumniSurveyForm";
import AlumniRegistrationForm from "./Feedbacks/AlumniRegistrationForm"
import AlumniProfile from "./Dashboard/Alumni/AlumniProfile";
import CareerResource from "./Dashboard/Alumni/CareerResource";
import SuccessStory from "./Dashboard/Alumni/SuccessStory";
import UpcomingEvents from "./Dashboard/Alumni/UpcomingEvents";
import Donation from "./Dashboard/Alumni/Donation";
import CrowdFundingPage from "./Dashboard/Alumni/CrowdFundingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/typingeffect" element={<TypingEffect />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/alumnidashboard" element={<AlumniDashboard />} />
        <Route path="/studentfeedback" element={<StudentFeedback />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/studentdata" element={<StudentData />} />
        <Route path="/alumnidata" element={<AlumniData />} />
        <Route path="/AlumniSurveyForm" element={<AlumniSurveyForm />} />
        <Route path="/AlumniProfile" element={<AlumniProfile />} />
        <Route path="/CareerResource" element={<CareerResource />} />
        <Route path="/AlumniRegistrationForm" element={<AlumniRegistrationForm />} />
        <Route path="/SuccessStory" element={<SuccessStory />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/CrowdFundingPage" element={<CrowdFundingPage />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
