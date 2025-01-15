/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaBox, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Inicio", link: "/", icon: <FaHome /> },
    { name: "Nosotros", link: "/Resume2", icon: <FaUserAlt /> },
    { name: "Acerca de la Empresa", link: "/Aboutme", icon: <FaInfoCircle /> },
    { name: "Productos", link: "/Projects", icon: <FaBox /> },
  ];

  return (
    <header className="shadow-lg">
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
         
          <div className="flex items-center space-x-4">
         
            <div className="text-white text-lg md:text-xl font-bold tracking-wide">
              ARTICO S.R.L
            </div>
        
            <div className="text-white text-sm md:text-base font-medium flex items-center space-x-2">
              <FaPhoneAlt />
              <span>Lunes - Viernes: 8:00 - 17:00</span>
              <span>|</span>
              <span>
                Teléfonos:
                <a href="tel:+59167709089" className="font-bold hover:underline ml-1">
                  (591) 67709089
                </a>
                /
                <a href="tel:+59171093843" className="font-bold hover:underline ml-1">
                  (591) 71093843
                </a>
              </span>
            </div>
          </div>

        
          <div className="flex items-center space-x-6">
            {Links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="flex items-center gap-1 text-white text-sm md:text-base hover:text-gray-200"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

       
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src="images/whasa.png" alt="WhatsApp" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/tuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src="images/facebook.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src="images/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic01 from './pictures/logo.png'; 
import pic02 from './pictures/whasa.png'; 
import pic03 from './pictures/bolivia.png'; 
import { FaHome, FaUserAlt, FaBriefcase, FaUsers , FaBars } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Inicio", link: "/", icon: <FaHome />, color: "text-gray-600" },
    { name: "Productos", link: "/Projects", icon: <FaBriefcase />, color: "text-gray-600" },
    { name: "Nosotros", link: "/Resume2", icon: <FaUserAlt />, color: "text-gray-600" },
    { name: "Acerca de la Empresa", link: "/Aboutme", icon: <FaUsers />, color: "text-gray-600" },
  ];

  return (
    <header className="shadow-lg">
      <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
         
<div className="top-area">
  <div className="container mx-auto flex items-center justify-between px-6 py-3">
    <div className="hidden md:flex items-center text-sm font-medium text-white space-x-6">
      <div className="flex items-center space-x-2">
        {/* Icono de teléfono */}
        <i className="fa fa-phone text-lg"></i>
        <a className="font-bold hover:underline" href="+591 76098537" target="_blank" rel="nofollow noopener noreferrer">
          +591 76098537
        </a>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* Icono de hora */}
        <i className="fa fa-clock-o text-lg"></i>
        <span>L-V: 8:30 – 18:00 | S: 8:30 – 14:30</span>
      </div>

      <div className="flex items-center space-x-2">
        {/* Icono de correo */}
        <i className="fa fa-envelope-o text-lg"></i>
        <a className="font-bold hover:underline" href="mailto:articobolivia@gmail.com">
        articobolivia@gmail.com
        </a>
      </div>
    </div>
  </div>
</div>
        
          {/* Iconos sociales */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/76098537"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={pic02}  alt="WhatsApp" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/tuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={pic03} alt="Facebook" className="h-6 w-6" />
            </a>
           
          </div>
        </div>
      </div>

      <nav className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-[3cm] py-3">
          {/* Logo de la empresa */}
          <div className="flex items-center space-x-4 mx-auto">
  <img
    src={pic01} // Usando la imagen importada
    alt="Logo Kavidoors"
    className="h-32 w-32" // Estableciendo un tamaño fijo tanto para altura como para anchura
  />
</div>

          {/* Menú principal */}
          <div className="flex items-center space-x-4">
    {Links.map((link) => (
      <Link
        key={link.name}
        to={link.link}
        className={`flex items-center gap-2 font-semibold text-xl md:text-1xl ${link.color} hover:underline`} // Aquí estamos usando text-xl para agrandar el texto
        aria-current={window.location.pathname === link.link ? "page" : undefined}
      >
        {link.icon}
        {link.name}
      </Link>
    ))}
  </div>

          {/* Botón para móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center text-red-600 hover:text-red-800"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {open && (
          <div className="md:hidden bg-white shadow-lg transition-all duration-300">
            {Links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className={`block px-4 py-2 ${link.color} hover:bg-gray-100`}
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;


