import React from 'react';
import elaboration from './Images/tilde.png';
import tilde from './Images/copo.png';
import * as stylesMM from '../stylesMM';

const Elaboration = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-6 sm:px-8 lg:px-12">

      {/* Contenido principal */}
      <div className="flex flex-col gap-y-6">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Valor para Nuestros Clientes
            <span className="text-cyan-500"> Artico</span>
          </h2>
        </div>

        <div className="space-y-6">
          {/* Puntos de valor */}
          <div className="flex items-start space-x-4">
            <img className="w-8 h-8 lg:w-12 lg:h-12" src={tilde} alt="tilde" />
            <p className="text-lg text-gray-700">Escuchamos las necesidades específicas de cada cliente para ofrecer soluciones a medida que optimicen sus operaciones.</p>
          </div>

          <div className="flex items-start space-x-4">
            <img className="w-8 h-8 lg:w-12 lg:h-12" src={tilde} alt="tilde" />
            <p className="text-lg text-gray-700">Acompañamos a nuestros clientes en cada paso, desde la planificación hasta la implementación y mantenimiento, asegurando un servicio completo y confiable.</p>
          </div>

          <div className="flex items-start space-x-4">
            <img className="w-8 h-8 lg:w-12 lg:h-12" src={tilde} alt="tilde" />
            <p className="text-lg text-gray-700">Creemos en construir relaciones de largo plazo basadas en la confianza, el respeto mutuo y el compromiso con el éxito de nuestros clientes.</p>
          </div>

          <div className="flex items-start space-x-4">
            <img className="w-8 h-8 lg:w-12 lg:h-12" src={tilde} alt="tilde" />
            <p className="text-lg text-gray-700">Entendemos la importancia de la inmediatez y trabajamos para resolver cualquier problema de manera rápida y efectiva, minimizando el tiempo de inactividad.</p>
          </div>

          <div className="flex items-start space-x-4">
            <img className="w-8 h-8 lg:w-12 lg:h-12" src={tilde} alt="tilde" />
            <p className="text-lg text-gray-700">Siendo inclusivos al crear alternativas para todos, desde personas con intolerancias alimentarias hasta quienes, por cuestiones éticas, no desean comer productos hechos con componentes animales.</p>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="mt-6 text-center">
          <button className={`${stylesMM.CARD_BUTTON} px-8 py-3 rounded-lg text-white bg-cyan-500 hover:bg-cyan-600`}>
            Descubre Nuestros Productos
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative">
        <img className="object-cover object-center w-full h-full rounded-lg shadow-lg" src={elaboration} alt="Elaboración" />
      </div>
      
    </div>
  );
};

export default Elaboration;
