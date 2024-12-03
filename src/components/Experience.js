import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const Experience = ({ startYear, endYear, duration, jobName, companyName, jobDesc }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Typography variant="body1">{startYear} - {endYear}</Typography>
                {duration && (
                    <Typography variant="body2" color="textSecondary">
                        Duración: {duration} Meses
                    </Typography>
                )}
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h6" gutterBottom>
                    {jobName}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {companyName}
                </Typography>
                {jobDesc && (
                    <Box component="div">
                        {jobDesc.map((text, index) => (
                            <Typography key={index} variant="body2" style={{ textAlign: 'justify', marginBottom: '8px' }}>
                                {text}
                            </Typography>
                        ))}
                    </Box>
                )}
            </Grid>
        </Grid>
    );
}

export default Experience;