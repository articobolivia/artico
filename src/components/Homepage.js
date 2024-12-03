/*import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./uno.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: [
        { src: 'images/FOTO1.jpg'},
        { src: '/images/art.png'},
        { src: '/images/FOTO1.jpg',},
      ],
      products: [
        {
          title: 'Cámara Frigorífica Modular',
          image: 'https://www.teplo.com.bo/wp-content/uploads/2023/10/teplo-Camara-Frigorifica-Modular-I.jpg',
          link: 'https://www.teplo.com.bo/camaras-modulares/',
        },
        {
          title: 'Central de Frío',
          image: 'https://www.teplo.com.bo/wp-content/uploads/2023/10/teplo-Central-de-Frio-I.jpg',
          link: 'https://www.teplo.com.bo/centrales-de-frio/',
        },
        {
          title: 'Enfriador Baudelot',
          image: 'https://www.teplo.com.bo/wp-content/uploads/2023/10/Teplo-Enfriador-Baudelot-I.jpg',
          link: 'https://www.teplo.com.bo/enfriadores-de-agua-baudelot/',
        },
      ],
    };
  }

  // Función para ir a la imagen anterior
  prevImage = () => {
    const { currentImageIndex, images } = this.state;
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    this.setState({ currentImageIndex: newIndex });
  };

  // Función para ir a la imagen siguiente
  nextImage = () => {
    const { currentImageIndex, images } = this.state;
    const newIndex = (currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: newIndex });
  };

  render() {
    const { currentImageIndex, images, products } = this.state;
    const currentImage = images[currentImageIndex];

    return (
      <div className="homepage-container">
        {/* Slider */
        /*<div className="slider-container">
          {/* Encabezado con logo y título de la empresa */
          /*<div className="header">
            <img src="images/art.png" alt="Logo" className="logo" style={{ height: '200px', marginRight: '50px' }} />
            <h1 className="company-title">ARTICO S.R.L</h1>
          </div>

          {/* Botón para ir a la imagen anterior */
          /*<button onClick={this.prevImage} className="slider-button left">
            &#9664;
          </button>

          {/* Contenedor para imagen y título */
          /*<div className="slider-content">
  <img src={currentImage.src} alt="" className="slider-image" />
</div>


          {/* Botón para ir a la imagen siguiente */
          /*<button onClick={this.nextImage} className="slider-button right">
            &#9654;
          </button>
        </div>

        {/* Título de productos destacados */
     /*   <div className="cms-custom-heading" style={{ textAlign: 'center', margin: '40px 0' }}>
  <div className="title-heading" style={{ fontWeight: 900, fontSize: '36px', margin: '20px 0' }}>
    Productos destacados
  </div>
</div>


        {/* Contenedor de productos */
       /* <div className="products-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
          {products.map((product, index) => (
            <div className="product-card" key={index} style={{ width: '30%', textAlign: 'center', marginBottom: '20px' }}>
              <h3 style={{ color: '#0d4892' }}>{product.title}</h3>
              <div className="product-image" style={{ marginBottom: '15px' }}>
                <img loading="lazy" src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="product-button">
                <a href={product.link} className="view-details-button" style={{ display: 'inline-block', padding: '10px 20px', background: '#0d4892', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
                  Ver detalles
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pie de página */
        /*<footer className="footer" style={{ backgroundColor: '#207433', padding: '20px', textAlign: 'center', marginTop: '20px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Contacto</h3>
              <p>&copy; 2024 ARTICO S.R.L.</p>
              <p>&copy; 2024 ARTICO S.R.L.</p>
            </div>
            <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Contacto</h3>
              <p>Contacto: Marina Mejia Orihuela</p>
              <p>&copy; 2024 ARTICO S.R.L.</p>
            </div>
            <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Contacto</h3>
              <p>Teléfono: 67709689 / 71093843</p>
              <p>&copy; 2024 ARTICO S.R.L.</p>
              <p>&copy; 2024 ARTICO S.R.L.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Homepage;*/
