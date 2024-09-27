"use client";

export const Button: React.FC = () => {
  return (
    <button
      onClick={() => console.log("working")}
      className="hero-button bg-orange-600 hover:bg-orange-700 rounded-xl text-white text-2xl font-bold px-6 py-4 flex items-center justify-center uppercase "
    >
      Order Pack
    </button>
  );
};
