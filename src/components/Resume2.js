import React, { Component } from "react";

import { Grid, Container, Typography, Box, Paper } from "@mui/material";
const Aboutme = () => {
  return (
    <Container sx={{ marginTop: "80px", paddingBottom: "40px", background: "#e0f7fa" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Imagen de la empresa en el lado izquierdo */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" sx={{ height: "100%" }}>
            <img
              src="images/pic09.jpg" // Cambia esta ruta según tu imagen
              alt="Empresa Ártico"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>

        {/* Sección de texto */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#0277bd", // Color celeste oscuro
              textTransform: "uppercase",
            }}
          >
            ¿Quiénes Somos?
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "#555",
              fontFamily: "Oxygen, sans-serif",
            }}
          >
            Ártico, una empresa joven y dinámica dedicada al rubro de la refrigeración.
            Nuestro compromiso es ofrecer soluciones innovadoras y eficientes, enfocadas en satisfacer las necesidades
            de nuestros clientes con productos de alta calidad y un servicio personalizado.
            <br />
            <br />
            En Ártico, combinamos tecnología de vanguardia con un enfoque sostenible, promoviendo el cuidado del medio ambiente
            mientras brindamos un desempeño excepcional en cada uno de nuestros proyectos. Nuestra misión es ser un aliado confiable
            para nuestros clientes, ayudándolos a alcanzar sus objetivos con confianza y eficiencia.
          </Typography>
        </Grid>
      </Grid>

    </Container>
  );
};

export default Aboutme;