
/*import img2 from "./pictures/dic1.jpg";
import img3 from "./pictures/dic2.jpg"; // Agrega más imágenes según necesites

const Portada = () => {
  const images = [img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar la imagen cada 3 segundos
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [images.length]);*/
/*
  return (
    <div className="relative w-screen h-[500px] mx-auto mt-6 overflow-hidden"> 
      <div className="slider-container w-full h-full relative m-0 p-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 border-none m-0 p-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ border: 'none', margin: 0, padding: 0, display: 'block' }} // Asegura que no haya bordes, márgenes ni paddings
          />
        ))}
      </div>
    </div>
  );
};

export default Portada;*/
import React, { useState, useEffect } from "react";
import img2 from "./pictures/dic1.jpg";
import img3 from "./pictures/dic2.jpg"; // Agrega más imágenes según necesites

const Portada = () => {
  const images = [img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar la imagen cada 3 segundos
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div className="relative w-screen h-[500px] mx-auto mt-6 overflow-hidden">
      {/* Contenedor del carrusel */}
      <div className="slider-container w-full h-full relative m-0 p-0">
        {/* Imágenes del carrusel */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Título centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)", // Fondo semitransparente
              color: "#bb1e18",
              padding: "1%",
              borderRadius: "10px",
            }}
            className="text-center text-2xl md:text-4xl font-bold"
          >
            FABRICANTES DE PUERTAS INDUSTRIALES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Portada;

