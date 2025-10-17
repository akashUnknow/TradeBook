import { Link } from "react-router-dom";

export default function NaviBar() {
  return (
    <nav className="bg-[var(--color-secondary)] text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
