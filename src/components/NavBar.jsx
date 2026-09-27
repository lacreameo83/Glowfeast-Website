import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-800 p-4 text-white">
      <div className="text-xl font-bold">MyBrand</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}