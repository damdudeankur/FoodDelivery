import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="flex justify-end gap-2 bg-slate-900 text-white py-2 px-4 ">
        <li><Link to="/fooditems">FoodItems</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </header>
  );
};

export default Header;
