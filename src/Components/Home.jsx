import { Link } from "react-router-dom";
import bannerImage from "../assets/students.webp";

const Home = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img src={bannerImage} alt="Graduation" className="w-full h-auto object-cover" />

      {/* Centered "Get Started" Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link to="/login">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
