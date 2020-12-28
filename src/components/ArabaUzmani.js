import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ButtonBase from '@material-ui/core/ButtonBase';

import get from '../requests/request';
import { HEALTH_CHECK } from '../requests/endpoints';

import firebase from '../firebase/init-firebase'

export default ArabaUzmani => {

  const storage = firebase.default.storage()
  const images = [
    {
      url: 'assets/half-car.jpg',
      title: 'Belirli bir model ara',
      width: '50%'
    },
    {
      url: 'assets/bridge.jpg',
      title: 'Sana en uygun modelleri keşfet',
      width: '50%'
    }
  ];

  const [firstImage, setFirstImage] = useState()
  const [secondImage, setSecondImage] = useState()

  useEffect(() => {
    get(HEALTH_CHECK)

    storage.ref(images[0].url).getDownloadURL().then( url => { 
      setFirstImage( url ) 
    } )
    storage.ref(images[1].url).getDownloadURL().then( url => { 
      setSecondImage( url ) 
    } )
    
  }, [])

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
      <ButtonBase
          component={Link}
          to={"/single"}
          focusRipple
          key={images[0].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "50vw",
            height: "100vh"
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${firstImage})`,
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
              {images[0].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        <ButtonBase
          component={Link}
          to={"/kesfet"}
          focusRipple
          key={images[1].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "50vw",
            height: "100vh"
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${secondImage})`,
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
              {images[1].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </div>
  );
}
