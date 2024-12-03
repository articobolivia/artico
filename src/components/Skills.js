import React from 'react';
import { Grid, Typography, LinearProgress, Box } from '@mui/material';

const Skills = ({ skill, progress }) => {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
                <Typography variant="body1">{skill}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress 
                        variant="determinate" 
                        value={progress} 
                        sx={{ height: 10, borderRadius: 5 }} // Ajusta el estilo si lo deseas
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Skills;
