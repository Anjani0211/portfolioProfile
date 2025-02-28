const Navbar = () => {
  return (
    <div className="pt-8">
      <p className="chakra-petch-bold text-xl text-orange-600 text-center mb-4 md:hidden" >Anjani Kumar</p>
      <nav className="chakra-petch-medium  p-4 bg-white text-black border-1 border-gray-200 rounded-full shadow">
        <div className="flex md:justify-between justify-center  px-4">
          <a href="#about" className="chakra-petch-bold text-xl text-orange-600 hidden md:block">Anjani kumar</a>

          <ul className="flex justify-evenly gap-4">
            <li>
              <a href="#contact">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
