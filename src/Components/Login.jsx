import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/students.webp";

const Login = () => {
  const navigate = useNavigate();

  // Student Login State
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentError, setStudentError] = useState("");

  // Alumni Login State
  const [alumniEmail, setAlumniEmail] = useState("");
  const [alumniPassword, setAlumniPassword] = useState("");

  // Admin Login State
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  // Validate Email Format
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Student Login: Must have @kgkite.ac.in email
  const handleStudentLogin = (e) => {
    e.preventDefault();

    if (!studentEmail || !studentPassword) {
      setStudentError("⚠️ All fields are required!");
      return;
    }
    if (!isValidEmail(studentEmail)) {
      setStudentError("⚠️ Invalid email format.");
      return;
    }
    if (!studentEmail.endsWith("@kgkite.ac.in")) {
      setStudentError("⚠️ Only @kgkite.ac.in emails are allowed!");
      return;
    }
    if (studentPassword.length < 6) {
      setStudentError("⚠️ Password must be at least 6 characters.");
      return;
    }

    setStudentError(""); // Clear error
    navigate("/studentdashboard");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="w-[90%] max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Student Login */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Student Login</h2>
            {studentError && <p className="text-red-600 text-center mb-3">{studentError}</p>}
            <form onSubmit={handleStudentLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Enter your email" 
                  value={studentEmail} 
                  onChange={(e) => setStudentEmail(e.target.value)} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Enter your password" 
                  value={studentPassword} 
                  onChange={(e) => setStudentPassword(e.target.value)} 
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                🔒 Log in
              </button>
            </form>
          </div>

          {/* Alumni Login (No Requirement) */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Alumni Login</h2>
            <form onSubmit={(e) => { e.preventDefault(); navigate("/alumnidashboard"); }}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Enter your email" 
                  value={alumniEmail} 
                  onChange={(e) => setAlumniEmail(e.target.value)} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Enter your password" 
                  value={alumniPassword} 
                  onChange={(e) => setAlumniPassword(e.target.value)} 
                />
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
                🔒 Log in
              </button>
            </form>
          </div>

          {/* Admin Login (No Requirement) */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Admin Login</h2>
            <form onSubmit={(e) => { e.preventDefault(); navigate("/admindashboard"); }}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Enter admin email" 
                  value={adminEmail} 
                  onChange={(e) => setAdminEmail(e.target.value)} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="Enter admin password" 
                  value={adminPassword} 
                  onChange={(e) => setAdminPassword(e.target.value)} 
                />
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">
                🔒 Log in
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
