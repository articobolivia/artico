import React from 'react';
import { Grid, Typography } from '@mui/material';

const Education = ({ startYear, endYear, degreeName, schoolName }) => {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
                <Typography variant="body1">{startYear} - {endYear}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h6" style={{ marginTop: '0px' }}>{degreeName}</Typography>
                <Typography variant="body2">{schoolName}</Typography>
            </Grid>
        </Grid>
    );
}

export default Education;
