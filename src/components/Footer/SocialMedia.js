import React from "react";
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import messenger from "./Images/messenger.png";
import telegram from "./Images/telegram.png";
import twitter from "./Images/twitter.png";
import whatsapp from "./Images/whatsapp.png";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-full h-60 bg-blue-900 text-white px-8">
      {/* Título centrado */}
      <div className="text-center mb-6">
        <p className="font-sans:'Roboto' text-xl font-semibold lg:text-2xl text-white">
          Nuestras Redes Sociales
        </p>
      </div>

      {/* Íconos */}
      <div className="flex justify-center gap-5 flex-nowrap">
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={facebook}
            alt="facebook"
          />
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={instagram}
            alt="instagram"
          />
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={messenger}
            alt="messenger"
          />
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={telegram}
            alt="telegram"
          />
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={twitter}
            alt="twitter"
          />
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={whatsapp}
            alt="whatsapp"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;


