import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} StayEasy. All rights reserved.
        </p>

        {/* Footer Nav */}
        <ul className="flex space-x-4 text-sm">
          <li><a href="#" className="hover:text-blue-500">Privacy</a></li>
          <li><a href="#" className="hover:text-blue-500">Terms</a></li>
          <li><a href="#" className="hover:text-blue-500">Support</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
