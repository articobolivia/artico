
import React from "react";
import { Grid, Typography, Box, Button, Container } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const ContactList = () => {
  return (
    <Box sx={{ backgroundColor: "#f1f1f1", padding: "40px 0" }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#013E6F" }}>
          ¡Contáctanos!
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Primer bloque de contacto */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ color: "#013E6F" }}>
              Llamanos a:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhoneIcon />}
              href="tel:+591 76098537"
              sx={{ fontSize: "1.2rem", padding: "10px 20px", marginBottom: "20px",  marginBottom: "10px",
                backgroundColor: "#013E6F",}}
            >
              Ventas 1:  76098537
            </Button>
            <br />
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhoneIcon />}
              href="tel:+59169080574"
              sx={{ fontSize: "1.2rem", padding: "10px 20px",  marginBottom: "10px",
                backgroundColor: "#013E6F", }}
            >
              
              Ventas 2: 69080574
            </Button>
          </Grid>

          {/* Bloque de contacto por email */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ color: "#013E6F" }}>
              O escríbenos a:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "1.2rem",
                padding: "10px 20px",
                marginBottom: "10px",
                backgroundColor: "#013E6F",
              }}
            >
              articobolivia@gmail.com
            </Button>
          </Grid>

          {/* Bloque de redes sociales o más opciones */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ color: "#013E6F" }}>
              Síguenos:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "1.2rem",
                padding: "10px 20px",
                marginBottom: "10px",
                backgroundColor: "#013E6F",
              }}
            >
              Facebook
            </Button>
            <br />
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "1.2rem",
                padding: "10px 20px",
                backgroundColor: "#013E6F",
                
              }}
            >
              Instagram
            </Button>
          </Grid>
        </Grid>

        <Typography variant="body1" align="center" sx={{ marginTop: "30px", color: "#555" }}>
        <p>2024 © Copyright articobolivia - Todos los derechos reservados</p>
        <p>Condiciones de uso | Privacidad | Política de cookies</p>
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactList;