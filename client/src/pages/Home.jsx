import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";
//  --color-primary: #f5f7fa;
//   --color-secondary: #14171A;
//   --color-btn-hover: #1DA1F2;
//   --color-accent: #657786;
//   --color-light: #ffffff;
//   --color-dark: #000000;
//   --color-text-primary: #0F1419;
//   --color-text-secondary: #536471;
const Home = () => {
  return (
    <main>
      <section className="home-section">
        <div className="home-content">
          {/* ------------------------------------------------------------------------------------- */}
          <div className="flex justify-center mb-6 mt-4">
            <h1
              className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold 
                 hover:bg-[var(--color-btn-hover)] hover:text-white 
                 transition-all duration-300 shadow-sm cursor-pointer"
            >
              Elevate Your Trading Career
            </h1>
          </div>
          {/* -------------------------------------------------------------------------------------- */}
          <p className="font-semibold text-7xl text-center mb-6 text-[var(--color-text-primary)]">
            Master your trading edge with powerful insights
          </p>

          <div className="flex justify-center mb-6 mt-4">
            <p className="font-normal text-xl text-center mb-6 text-[var(--color-text-primary)]">
              Track, analyze, and improve your trading performance with a
              powerful journal designed by traders, for traders.
            </p>
          </div>
          {/* ------------------------------------------------------------------------------------- */}
          <div className="flex gap-6 justify-center mb-10">
            <Link to="/login">
              <Button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold
                     hover:bg-[var(--color-btn-hover)] 
                     hover:scale-105 
                     hover:shadow-lg
                     transition duration-300 ease-in-out"
              >
                Start Journaling
              </Button>
            </Link>

            <Link to="/getStarted">
              <Button
                className="bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold
                     hover:bg-[var(--color-btn-hover)] 
                     hover:scale-105 
                     hover:shadow-lg
                     transition duration-300 ease-in-out"
              >
                Sign in
              </Button>
            </Link>
          </div>
          {/* -------------------------------------------------------------------------------------------------- */}
          <div className="m-16 flex justify-center">
            <img className="rounded-2xl" src={heroImage} alt="Hero" />
          </div>

           {/* -------------------------------------------------------------------------------------- */}
          <p className="font-semibold text-7xl text-center mb-6 text-[var(--color-text-primary)]">
            Everything You Need to Succeed
          </p>

          <div className="flex justify-center mb-6 mt-4">
            <p className="font-normal text-xl text-center mb-6 text-[var(--color-text-primary)]">
              Powerful tools to help you analyze your trading behavior, identify patterns, and improve your results.
            </p>
          </div>
          <a href="/dashboard" className="home-cta-button">
            Go to Dashboard
          </a>
        </div>
      </section>
      <footer className="home-footer">
        <p className="home-footer-text">
          © 2023 TradeBook. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Home;
