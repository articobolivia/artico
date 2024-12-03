import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../components/pictures/pic01.jpg";
import img2 from "../components/pictures/pic02.jpg";
import img3 from "../components/pictures/pic03.jpg";
import img4 from "../components/pictures/pic04.jpg";
import img5 from "../components/pictures/pic05.jpg";
import img6 from "../components/pictures/pic06.jpg";
import img7 from "../components/pictures/pic07.jpg";
import img9 from "../components/pictures/pic09.jpg";
import img10 from "../components/pictures/pic10.jpg";
import img11 from "../components/pictures/pic11.jpg";
import img12 from "../components/pictures/pic12.jpg";
import varios from "../components/pictures/varios.jpg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true, // Muestra los puntos de navegación
      infinite: true,
      speed: 300,
      slidesToShow: 3, // Cambié a 3 para que las imágenes sean más grandes
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, // Menos imágenes en pantallas más pequeñas
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1, // Una imagen grande por vez
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="justify-center mt-40">
        <h2 className="mt-4 font-sans:'Roboto' text-4xl font-semibold text-center">
          Artico{" "}
          <span className="font-serif text-4xl font-semibold text-center text-cyan-400">
            Productos
          </span>{" "}
        </h2>

        <div className="w-full mt-10 h-96">
          <Slider {...settings}>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img1}
                alt="cucurucho"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img2}
                alt="palta"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img3}
                alt="variados"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img4}
                alt="bochas"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img5}
                alt="sabores"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img6}
                alt="niños"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img7}
                alt="gourmet"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={varios}
                alt="chef"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img9}
                alt="compartir"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img10}
                alt="cuchara"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img11}
                alt="chica"
              />
            </div>
            <div>
              <img
                className="h-72 mt-8 mx-auto border-4 rounded-lg border-cyan-500 w-80 transition-all duration-300 transform hover:scale-105"
                src={img12}
                alt="heladero"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
