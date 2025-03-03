import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pt-8">
      <p className="chakra-petch-bold text-xl text-orange-600 text-center mb-4 md:hidden" >
        <Link to="/">Anjani Kumar</Link></p>
      <nav className="chakra-petch-medium  p-4 bg-white text-black border-1 border-gray-200 rounded-full shadow">
        <div className="flex md:justify-between justify-center  px-4">
          <Link to="/" className="chakra-petch-bold text-xl text-orange-600 hidden md:block">Anjani kumar</Link>

          <ul className="flex justify-evenly gap-4">
            <li>
            <Link to="/blogs">Blogs</Link>
            </li>
            <li>
            <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
