import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar p-8 flex justify-between items-center bg-slate-600">
        <Link className=" font-bold text-3xl" to="/">eCommerce</Link>
      <ul className="menu list-none flex items-center gap-4 text-xl">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos/beauty">Beauty</Link></li>
        <li><Link to="/productos/fragrances">Fragrances</Link></li>
        <li><Link to="/productos/furniture">Furniture</Link></li>
        <li><Link to="/productos/groceries">Groceries</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;