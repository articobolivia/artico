import React from 'react';
import { Grid, Typography, Button, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box className="contact-body" sx={{ padding: '2em' }}>
      <Grid container className="contact-grid" spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>Nube Technologies</Typography>
          <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src="images/grupo.jpg" alt="Empresa" />
          <Typography variant="body1" sx={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
            Los servicios de desarrollo de software personalizado en el mar de Startechup están al alcance de su mano. ¡Envíenos un correo electrónico!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>Contáctenos</Typography>
          <hr />
          <Box className="contact-list" sx={{ marginTop: '2em' }}>
            <List>
              <ListItem>
                <IconButton edge="start" aria-label="phone">
                  <PhoneIcon />
                </IconButton>
                <ListItemText primary="+591 69080574" sx={{ fontSize: '25px', fontFamily: 'Anton' }} />
              </ListItem>
              <ListItem>
                <IconButton edge="start" aria-label="email">
                  <EmailIcon />
                </IconButton>
                <ListItemText primary="NubeTechnolies@gmail.com" sx={{ fontSize: '25px', fontFamily: 'Anton' }} />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
