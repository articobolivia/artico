import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { CakeIcon } from "@heroicons/react/outline";
import { PhoneIncomingIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CloudIcon } from "@heroicons/react/outline";
import { CubeIcon } from "@heroicons/react/outline";
const Columnas = () => {
  return (
    <div className="font-inter mt-10 px-6 sm:px-12">
      {/* Título centrado y subrayado */}
      <div className="text-center">
        <h1 className="relative mt-4 mb-10 text-4xl font-semibold text-gray-800 inline-block">
        ALGUNOS DE NUESTROS VALORES
          
          <span
            className="absolute bottom-[-10px] left-0 right-0 mx-auto h-1 bg-red-500"
            style={{ width: "100%", marginTop: "10px" }}
          ></span>
        </h1>
      </div>

      {/* Columnas */}
      <div className="mt-10">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Primer columna */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-500 flex items-center justify-center">
              <CloudIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800">
              Innovación y Compromiso
            </h2>
            <p className="text-gray-600">
              En Artico, no solo ofrecemos soluciones, sino que trabajamos de
              manera proactiva para mejorar constantemente nuestros servicios.
            </p>
          </div>

          {/* Segunda columna */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-500 flex items-center justify-center">
              <CubeIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800">
              Excelencia Operacional
            </h2>
            <p className="text-gray-600">
              Cada proyecto es una oportunidad para superar las expectativas de
              nuestros clientes, asegurando la máxima eficiencia y fiabilidad.
            </p>
          </div>

          {/* Tercera columna */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-500 flex items-center justify-center">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800">
              Asistencia Tecnica
            </h2>
            <p className="text-gray-600">
            Una estrecha colaboración técnica permite frecuentemente optimizar el diseño de los productos. 
            </p>
          </div>

          {/* Cuarta columna */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-500 flex items-center justify-center">
              <EmojiHappyIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800">
              Trabajo en Equipo
            </h2>
            <p className="text-gray-600">
              Trabajar en equipo nos permite aprovechar al máximo el talento
              colectivo y encontrar soluciones innovadoras que generan
              resultados excepcionales.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Columnas;
