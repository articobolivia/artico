import React, { Component } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

class Aboutme extends Component {
  render() {
    return (
      <Container
        sx={{
          textAlign: "center",
          marginTop: "100px",
          padding: "40px",
          background: "#e0f7fa", // Color celeste claro
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "48px",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "Anton, sans-serif",
            color: "#0277bd",
          }}
        >
          ¿Quiénes Somos?
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: "40px" }}>
          {/* Cuadro de misión */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#0277bd",
                  mb: 2,
                }}
              >
                Misión
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.2rem",
                  color: "#555",
                  lineHeight: 1.8,
                  fontFamily: "Oxygen, sans-serif",
                }}
              >
                En Ártico, nuestra misión es ofrecer soluciones de refrigeración innovadoras y de alta calidad para crear un ambiente óptimo,
                eficiente y sostenible para nuestros clientes. Nos esforzamos por brindar un servicio personalizado, ajustándonos a las 
                necesidades de cada proyecto, y asegurando la máxima eficiencia energética y respeto al medio ambiente.
              </Typography>
            </Box>
          </Grid>

          {/* Cuadro de visión */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#0277bd",
                  mb: 2,
                }}
              >
                Visión
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.2rem",
                  color: "#555",
                  lineHeight: 1.8,
                  fontFamily: "Oxygen, sans-serif",
                }}
              >
                Queremos ser reconocidos como la empresa líder en soluciones de refrigeración eficientes, ofreciendo productos de última generación
                que combinan tecnología avanzada con un compromiso firme con la sostenibilidad. Buscamos contribuir a un mundo más eficiente 
                y responsable, donde cada proyecto se traduzca en un resultado excepcional para nuestros clientes.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Aboutme;