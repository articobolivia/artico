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
      <div className="text-center">
        <h1 className="mt-4 mb-4 text-4xl font-semibold text-gray-800">
          ¿Por qué elegirnos{" "}
          <span className="text-4xl font-semibold text-cyan-500">Artico</span>?
        </h1>
      </div>

      <div className="mt-10">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Primer columna */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <CloudIcon className="w-12 h-12 mx-auto text-cyan-500" />
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
            <CubeIcon className="w-12 h-12 mx-auto text-cyan-500" />
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
            <ShieldCheckIcon className="w-12 h-12 mx-auto text-cyan-500" />
            <h2 className="mt-4 mb-4 text-xl font-semibold text-gray-800">
              Sostenibilidad
            </h2>
            <p className="text-gray-600">
              Nos comprometemos a implementar tecnologías que respeten el
              medio ambiente, garantizando un futuro más limpio.
            </p>
          </div>

          {/* Cuarta columna */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <EmojiHappyIcon className="w-12 h-12 mx-auto text-cyan-500" />
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
