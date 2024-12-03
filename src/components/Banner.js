import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Icono de teléfono

function Banner() {
  return (
    <section className="bg-blue-600 py-2 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <p className="text-center text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
          <span className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-white" />
            Lunes - Viernes: 8:00 - 17:00 | Teléfonos: 
            <a href="tel:+59167709089" className="font-bold"> (591) 67709089</a> / 
            <a href="tel:+59171093843" className="font-bold"> (591) 71093843</a>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Banner;
