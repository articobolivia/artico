
import React from "react";
import { Grid, Typography, Box, Button, Container } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const ContactList = () => {
  return (
    <Box sx={{ backgroundColor: "#f1f1f1", padding: "40px 0" }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#0277bd" }}>
          ¡Contáctanos!
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Primer bloque de contacto */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ color: "#0277bd" }}>
              Llamanos a:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhoneIcon />}
              href="tel:+59167709689"
              sx={{ fontSize: "1.2rem", padding: "10px 20px", marginBottom: "20px" }}
            >
              Ventas 1: 67709689
            </Button>
            <br />
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhoneIcon />}
              href="tel:+59171093843"
              sx={{ fontSize: "1.2rem", padding: "10px 20px" }}
            >
              Ventas 2: 71093843
            </Button>
          </Grid>

          {/* Bloque de contacto por email */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ color: "#0277bd" }}>
              O escríbenos a:
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<MailIcon />}
              href="mailto:contacto@artico.com"
              sx={{ fontSize: "1.2rem", padding: "10px 20px", marginBottom: "20px" }}
            >
              contacto@artico.com
            </Button>
          </Grid>

          {/* Bloque de redes sociales o más opciones */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ color: "#0277bd" }}>
              Síguenos:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "1.2rem",
                padding: "10px 20px",
                marginBottom: "10px",
                backgroundColor: "#0d47a1",
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
                backgroundColor: "#1976d2",
              }}
            >
              Instagram
            </Button>
          </Grid>
        </Grid>

        <Typography variant="body1" align="center" sx={{ marginTop: "30px", color: "#555" }}>
          ¡Estamos para ayudarte con cualquier consulta! No dudes en llamarnos o escribirnos.
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactList;