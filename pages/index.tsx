import React from "react";
import Layout from "@/components/layout/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Welcome to StayEasy</h1>
      {/* Add more content here */}
    </Layout>
  );
};

export default HomePage;

import React from "react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/constants/images";

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      import Pill from "@/components/common/Pill";

const filters = ["Top Villa", "Self Checkin", "Free WiFi", "Pool", "Family Friendly"];

{/* Filter Section */}
<section className="py-6 bg-white px-4">
  <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
    {filters.map((filter) => (
      <Pill key={filter} label={filter} />
    ))}
  </div>
</section>

      </Layout>
  );
};

export default HomePage;
