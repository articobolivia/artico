import React, { useState } from "react";
import fresas from "./pictures/pvc.png";
import linda from "./pictures/manta.png";
import crema from "./pictures/gas.png";
import mango from "./pictures/panel.png";
import * as stylesMM from "./stylesMM";
import { useModalHookState } from "./useModalHookState";
import Modal from "./Modal";

const Tarjetas = () => {
  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  const [item, setItem] = useState("prueba");

  const handleModal = (data) => {
    setItem(data);
    openModal(!modalIsOpen);
  };

  const veganos =
    "Aislamiento de Nepreno";
  const mascotas =
    "Gas Refrigerantes";
  const celiacos =
    "Cortina de media Temperatura";
  const ofertas =
    "Panel";

  return (
    <>
      <div className="mt-4 mb-10 text-center">
  <h1 className="text-5xl font-bold text-blue-600 hover:text-blue-800 transition-all duration-300">
    Principales Productos
  </h1>
</div>


      <div className={stylesMM.MAIN_CONTAINER}>
        {/* Primer tarjeta */}
        <div className="m-4 bg-white rounded-lg shadow-lg w-80">
          <img
            className="object-cover rounded-t-lg h-60 w-80"
            src={fresas}
            alt="crema"
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
              Cortina 
            </h5>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(celiacos)}
              >
                Más Info
              </button>
            </div>
          </div>
        </div>
        {/* Segunda tarjeta */}
       
        <div className="m-4 bg-white rounded-lg shadow-lg w-80">
          <img
            className="object-cover rounded-t-lg h-60 w-80"
            src={linda}
            alt="crema"
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
              Aislamiento de Nepreno
            </h5>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(veganos)}
              >
                Más Info
              </button>
            </div>
          </div>
        </div>
        {/* Tercera tarjeta */}
        <div className="m-4 bg-white rounded-lg shadow-lg w-80">
          <img
            className="object-cover rounded-t-lg h-60 w-80"
            src={crema}
            alt="crema"
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
              Gas Refrigerantes
            </h5>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(mascotas)}
              >
                Más Info
              </button>
            </div>
          </div>
        </div>

        {/* Cuarta tarjeta */}
        <div className="m-4 bg-white rounded-lg shadow-lg w-80">
          <img
            className="object-cover rounded-t-lg h-60 w-80"
            src={mango}
            alt="varios sabores"
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
              Panel
            </h5>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(ofertas)}
              >
                Más Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div className="object-center">
          <div className="mt-2 ml-12 w-96">
            <h2 className="justify-center mt-2 font-sans text-3xl font-semibold text-black ml-14 w-96">
              Lo que tenés{" "}
              <span className="font-serif text-3xl font-semibold text-cyan-600">
                que saber!
              </span>
            </h2>
            <p className="mt-10 ml-20 text-base text-justify text-black h-2/3">
              {item}
            </p>
          </div>
          
        </div>
      </Modal>
    </>
  );
};

export default Tarjetas;
