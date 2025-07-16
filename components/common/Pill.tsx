import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border ${
        isActive ? "bg-blue-600 text-white" : "bg-white text-gray-700"
      } hover:shadow-md transition`}
    >
      {label}
    </button>
  );
};

export default Pill;
