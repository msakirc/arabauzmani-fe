import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';



export default ArabaUzmani => {
  return (
    <div>
      {/* <div className="container">

          <Button component={Link} to="/ara" fullWidth="true" variant="contained" size="large" color="primary">
            Primary
          </Button>
          <Button component={Link} to="/kesfet" variant="contained" fullWidth="true" size="large" color="secondary" >
            Secondary
          </Button>

        </div> */}

      {
        <Grid container spacing={3} justify="space-evenly" alignItems="center" style={{ minHeight: '100vh' }} >

          <Grid item >
            <Button component={Link} to="/ara" xs={12} sm={6} fullWidth={true} variant="contained" size="large" color="primary">
              Belirli bir model ara
                </Button>
          </Grid>
          <Grid item >
            <Button component={Link} to="/kesfet" xs={12} sm={6} variant="contained" size="large" color="secondary" >
              Sana en uygun modelleri keşfet
            </Button>
          </Grid>
        </Grid>
      }

    </div>
  );
}
