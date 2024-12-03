import React, { useState } from "react";
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
          {/* Nombre de la Empresa y Horarios de Atención en una sola línea */}
          <div className="flex items-center space-x-4">
            {/* Nombre de la Empresa */}
            <div className="text-white text-lg md:text-xl font-bold tracking-wide">
              ARTICO S.R.L
            </div>
            {/* Horarios de Atención */}
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

          {/* Menú Navegación */}
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

          {/* Redes Sociales */}
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

export default Nav;
