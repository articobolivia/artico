import React from "react";
import helados from "./Images/cam.png";
import * as stylesMM from "../stylesMM";

const Delivery = () => {
  return (
    <div>
      <div className="grid h-auto max-w-full py-5 md:px-5 grid-row-2 lg:grid lg:grid-cols-2 lg:gap-x-5">
        {/* Imagen del producto */}
        <div>
          <img
            className="object-cover object-center w-11/12 h-full rounded-lg shadow-lg"
            src={helados}
            alt="Hace tu pedido ONLINE"
          />
        </div>

        {/* Información sobre la cotización y pedido */}
        <div className="flex flex-col font-sans: 'Roboto' content-center pt-6 mx-2 container-text lg:mx-0 gap-y-5 lg:gap-y-8">
          <div className="text-xl font-semibold container-title md:text-2xl xl:text-3xl">
            <p className="text-green-700">¡Haz tu Pedido en Bolivia!</p>
            <p className="pb-3">¡ARTICO S.R.L!</p>
          </div>

          <div className="container-p md:text-lg">
            <p className="text-justify">
              ¿Quieres adquirir nuestros productos pero no sabes por dónde empezar? No te preocupes, ¡estamos aquí para ayudarte! Solo tienes que contactarnos y nosotros nos encargaremos del resto.
            </p>
            <br />
            <p className="text-justify">
              Te proporcionaremos una cotización personalizada para los productos que desees. Recibirás el detalle completo de precios y opciones, todo de manera clara y transparente.
            </p>
            <br />
            <p className="text-justify">
              Lo mejor de todo es que puedes hacer tu pedido desde cualquier lugar del país, ¡y nosotros te lo llevamos! Gracias a nuestro servicio de entrega, llegarás a disfrutar de tus productos favoritos sin preocuparte.
            </p>
            <br />
            <p className="text-justify">
              Ya sea que estés en Santa Cruz o en cualquier otro lugar, nuestro proceso de compra es rápido, seguro y completamente en línea. Contáctanos ahora, cuéntanos lo que necesitas y obtendrás una cotización de manera inmediata.
            </p>
            <br />
          </div>

          {/* Botón de acción */}
          <div>
            <button className={`${stylesMM.CARD_BUTTON} px-8 py-3 rounded-lg text-white bg-cyan-500 hover:bg-cyan-600`}>
              Haz tu Pedido Online Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
