import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ButtonBase from '@material-ui/core/ButtonBase';

import HalfCar from "../../public/images/half-car.jpg"
import Bridge from "../../public/images/bridge.jpg"

export default ArabaUzmani => {

  const images = [
    {
      url: "../../public/images/half-car.jpg",
      title: 'Belirli bir model ara',
      width: '50%'
    },
    {
      url: "../../public/images/bridge.jpg",
      title: 'Sana en uygun modelleri keşfet',
      width: '50%'
    }
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));


  const classes = useStyles();
  return (
    <div className={classes.root}>
      {images.map((image, index) => (
        <ButtonBase
          component={Link}
          to={index == 0 ? "/ara" : "/kesfet"}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            height: "100vh"
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
              style={{ fontSize: "3rem" }}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );









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
