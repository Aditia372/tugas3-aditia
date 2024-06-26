import { Link } from "react-router-dom";
function Header() {
  return (
    // <div className="min-h-screen bg-cover bg-center"
    //      style={{ backgroundImage: "url('foto.png')" }}>
      <nav className="flex items-center bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="react.svg" alt="React Logo" className="h-8 mr-2" />
            <span className="text-white text-lg font-bold">Galaxy React</span>
          </div>
          <ul className="flex">
            <li className="mx-3">
              <a href="#" className="text-white hover:text-blue-200"><Link to="/">
                Home</Link>
              </a>
            </li>
            <li className="mx-3">
              <a href="#" className="text-white hover:text-blue-200"><Link to= "/about">
                About</Link>
              </a>
            </li>
            <li className="mx-3">
              <a href="#" className="text-white hover:text-blue-200"><Link to="/contact">
                Contact</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Header;
