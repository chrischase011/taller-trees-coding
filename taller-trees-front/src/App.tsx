import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes"; // Import routes

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-gradient-to-r from-pink-500 to-blue-500 p-4">
          <ul className="flex justify-center space-x-4 text-white font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <main className=" bg-gradient-to-br from-slate-200 to-purple-100 flex-grow p-6">
          <Routes>
            {routes.map(({ path, component }, index) => (
              <Route key={index} path={path} element={React.createElement(component)} />
            ))}
          </Routes>
        </main>

        <footer className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 text-center text-white">
          &copy; 2024 My React App
        </footer>
      </div>
    </Router>
  );
};

export default App;
