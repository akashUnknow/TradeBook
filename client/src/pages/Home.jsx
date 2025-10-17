import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";
import CardLayout from "../components/CardLayout";
import {
  ChartColumn,
  Clock,
  ShieldBan,
  SquareCheckBig,
  FileText,
  BookOpenCheck,
  MoveRight
} from "lucide-react";
import CardFeedback from "../components/CardFeedback";
import FaqCom from "../components/FaqCom";
import FooterApp from "../components/FooterApp";
//  --color-primary: #f5f7fa;
//   --color-secondary: #14171A;
//   --color-btn-hover: #1DA1F2;
//   --color-accent: #657786;
//   --color-light: #ffffff;
//   --color-dark: #000000;
//   --color-text-primary: #0F1419;
//   --color-text-secondary: #536471;
const cardsData = [
  {
    title: "Comprehensive Analytics",
    content:
      "Track your win rate, profit factor, drawdown, and dozens of other crucial trading metrics in real-time.",
    Icon: ChartColumn,
  },
  {
    title: "Trading Journal",
    content:
      "Record detailed trade notes, emotions, and screenshots. Organize your thoughts and review your decision-making process to improve future trades.",
    Icon: Clock,
  },
  {
    title: "Trading Playbooks",
    content:
      "Create and refine your trading strategies with customizable playbooks. Document your setups, entry/exit rules, and track performance by strategy.",
    Icon: BookOpenCheck,
  },
  {
    title: "Detailed Reports",
    content:
      "Generate comprehensive reports on your trading performance for any time period. Export data for tax purposes or further analysis in your preferred format.",
    Icon: FileText,
  },
  {
    title: "Progress Tracker",
    content:
      "Set trading rules and track your adherence to them. Build positive habits with streaks and see how discipline impacts your bottom line.",
    Icon: SquareCheckBig,
  },
  {
    title: "Risk Management Tools",
    content:
      "Calculate position sizes, risk-reward ratios, and potential drawdowns before entering trades. Set alerts for risk exposure and portfolio concentration.",
    Icon: ShieldBan,
  },

  // add more cards here
];

const CardFeedbackData = [
  {
    feedback:
      '"Since I started using Tradiary, my win rate has increased from 42% to 61%. The analytics helped me identify and eliminate my worst trading patterns."',
    name: "Michael R.",
    role: "Forex Trader, 4 years",
    avatar: "https://github.com/shadcn.png",
  },
    {
      feedback:
        '"As a crypto trader, understanding my emotional patterns is crucial. Tradiary\'s journal feature has been invaluable for tracking my psychology alongside performance."',
      name: "Michael R.",
      role: "Forex Trader, 4 years",
      avatar: "https://github.com/shadcn.png",
    },
    {
    feedback:
      '"The calendar view showing my daily P&L has completely changed how I approach my trading schedule. I\'ve identified which days of the week I perform best."',
    name: "Michael R.",
    role: "Forex Trader, 4 years",
    avatar: "https://github.com/shadcn.png",
  },

  // add more feedback entries here
];
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
          <p className="font-semibold text-4xl text-center mb-6 text-[var(--color-text-primary)]">
            Everything You Need to Succeed
          </p>

          <div className="flex justify-center mb-6 mt-4">
            <p className="font-normal text-xl text-center mb-6 text-[var(--color-text-primary)]">
              Powerful tools to help you analyze your trading behavior,
              <br /> identify patterns, and improve your results.
            </p>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div className="m-5 flex flex-wrap gap-16 justify-center">
            {cardsData.map((card, index) => (
              <CardLayout
                key={index}
                title={card.title}
                content={card.content}
                Icon={card.Icon}
              />
            ))}
          </div>
          {/* ---------------------------------------------------------------------- */}

          <div className="my-10 flex flex-wrap gap-16 justify-center">
            <Button
              className="bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold
                     hover:bg-[var(--color-btn-hover)] 
                     hover:scale-105 
                     hover:shadow-lg
                     transition duration-300 ease-in-out"
            >
              Explore more features
              <MoveRight />
            </Button>
          </div >
          {/* ---------------------------------------------------------------------- */}

            <p className="font-semibold text-4xl text-center mb-6 text-[var(--color-text-primary)]">
            Trusted by Professional Traders
          </p>

          <div className="flex justify-center mb-6 mt-4">
            <p className="font-normal text-xl text-center mb-6 text-[var(--color-text-primary)]">
              See how Tradiary has helped traders improve their performance and
              <br /> achieve their goals.
            </p>
          </div>
          {/* ---------------------------------------------------------------------- */}
          <div className="flex items-center justify-center gap-8 flex-wrap mb-16">
            {CardFeedbackData.map((data, index) => (
              <CardFeedback
                key={index}
                feedback={data.feedback}
                name={data.name}
                role={data.role}
                avatar={data.avatar}
              />
            ))}
          </div>
          {/* -------------------------------------------------------------------- */}
             <p className="font-semibold text-4xl text-center mb-6 text-[var(--color-text-primary)]">
            Frequently Asked Questions
          </p>

          <div className="flex justify-center mb-6 mt-4">
            <p className="font-normal text-xl text-center mb-6 text-[var(--color-text-primary)]">
              Get answers to common questions about Tradiary.
            </p>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="mx-20 mb-6 flex flex-wrap gap-16 justify-center">
            <FaqCom />
          </div>
          {/* -------------------------------------------------------------------- */}
        </div>
      </section>
      <div>
        <FooterApp/>
      </div>
    </main>
  );
};

export default Home;
