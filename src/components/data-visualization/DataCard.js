import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Zoom from '@material-ui/core/Zoom';
import Drawer from '@material-ui/core/Drawer';
import { yellow } from '@material-ui/core/colors';
import { spacing } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import Rating from '@material-ui/lab/Rating';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import EditIcon from '@material-ui/icons/Edit';
import Popover from '@material-ui/core/Popover';
import { Avatar, DialogActions, Grid } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";
import AddCommentIcon from '@material-ui/icons/AddComment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


import firebase from '../../firebase/init-firebase'


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
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
}));

export default function DataCard({ value, label, image }) {
  const classes = useStyles();

  const storage = firebase.default.storage()
  const [media, setMedia] = useState()

  useEffect(() => {
    storage.ref(image).getDownloadURL().then(url => setMedia(url))

  }, []);

  return (
    <>
    {/* <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${media})`,
            }}
          /> */}
      <Card raised square className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.typography} variant="subtitle1" color="textSecondary" style={{ whiteSpace: "pre-line" }} >
              {label}
            </Typography>
            <Typography className={classes.typography} component="h4" variant="h4">
              {value}
            </Typography>
          </CardContent>
        </div>
      </Card>
      {/* <CardMedia
        className={classes.cover}
        image={media}
      /> */}
    </>

  )
}