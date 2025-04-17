import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const dummyUser = {
    name: user?.name || "Ravi Dev",
    email: user?.email || "ravi.dev@example.com",
    photoUrl: user?.photoUrl || "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "💻 Passionate frontend developer | 🚀 React & JS wizard | ❤️ Loves open source & good chai.",
    skills: ["React", "JavaScript", "Node.js", "Tailwind", "TypeScript"],
    location: "Mumbai, India"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf2f8] via-[#f8e4f4] to-[#ede9fe] animate-backgroundFade">
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-8 w-[90%] max-w-md text-center animate-fadeUp">
        <img
          src={dummyUser.photoUrl}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-pink-400 shadow-lg mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{dummyUser.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{dummyUser.email}</p>
        <p className="text-gray-700 italic mt-3">{dummyUser.bio}</p>
        <p className="mt-2 text-sm text-pink-600 font-semibold">{dummyUser.location}</p>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {dummyUser.skills.map((skill, index) => (
              <span key={index} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:scale-105"
        >
          🔙 Back to Home
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeUp {
            animation: fadeUp 0.8s ease-out forwards;
          }

          @keyframes backgroundFade {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-backgroundFade {
            background-size: 200% 200%;
            animation: backgroundFade 12s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;