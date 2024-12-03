import React from 'react';
import bluecow from './Images/art.png';
import * as stylesMM from '../stylesMM';

const Socio = () => {
  return (
    <div className="grid content-center max-w-full text-center bg-blue-300 gap-y-10 h-80 grid-row-3">          

      <div className="flex flex-wrap justify-center text-xl font-bold container-title md:text-2xl xl:text-3xl">
        <p className="font-extrabold text-black uppercase">
          ¡Ahora tú eres el socio principal de Artico!
        </p>
      </div> 

      <div className="flex justify-center gap-5 flex-nowrap">
        <img className="w-24 h-24 rounded-full" src={bluecow} alt="bluecow" />
      </div> 

      <div>
        <button className={`${stylesMM.CARD_BUTTON} mt-6 px-10 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-full transition-all duration-300`}>
          ¡Visita nuestro sitio web y descubre más!
        </button>
      </div>

    </div>
  );
}

export default Socio;
