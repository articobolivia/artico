import React from 'react';
import bluecow from './Images/art.png';
import * as stylesMM from '../stylesMM';

const Socio = () => {
  return (
    <div className="flex items-center justify-center max-w-full h-80 bg-blue-900 text-white px-10">
      
      {/* Columna izquierda: Título */}
      <div className="flex-1 text-left">
        <h1 className="text-3xl font-bold uppercase">
        Tu partner de confianza en soluciones de aislamiento
        </h1>
      </div>

      {/* Columna derecha: Íconos, números y descripciones */}
      <div className="flex-1 grid grid-cols-3 gap-4 text-center">
        {/* Columna 1 */}
        <div>
          <img
            className="w-14 h-14 mx-auto text-red-500"
            src="https://kavidoors.com/wp-content/uploads/2015/05/engineer.png"
            alt="Años de experiencia"
          />
          <p className="text-4xl font-bold">45</p>
          <p className="text-gray-300">Años de experiencia</p>
        </div>

        {/* Columna 2 */}
        <div>
          <img
            className="w-14 h-14 mx-auto text-red-500"
            src="https://kavidoors.com/wp-content/uploads/2015/05/engineer.png"
            alt="Sector"
          />
          <p className="text-4xl font-bold">12</p>
          <p className="text-gray-300">Sectores atendidos</p>
        </div>

        {/* Columna 3 */}
        <div>
          <img
            className="w-14 h-14 mx-auto text-red-500"
            src="https://kavidoors.com/wp-content/uploads/2015/05/engineer.png"
            alt="Personal"
          />
          <p className="text-4xl font-bold">100+</p>
          <p className="text-gray-300">Personal calificado</p>
        </div>
      </div>
    </div>
  );
};

export default Socio;