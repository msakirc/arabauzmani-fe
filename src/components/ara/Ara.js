import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
import { spacing } from '@material-ui/system';

import { Avatar, DialogActions, Grid } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';


import palio from "../../../public/images/Fiat_Palio_3door.jpg"
import toyota from "../../../public/images/toyota.png"
import Car from '../../models/Car';
import CarSelectDialog from '../carSelectorDialog/Dialog';

const images = [
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Breakfast',
        width: '40%',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Burgers',
        width: '30%',
    },
    {
        url: '/static/images/grid-list/camera.jpg',
        title: 'Camera',
        width: '30%',
    },
];

const useStyles = makeStyles((theme) => ({

    root: {
        width: "100%",
        height: "100vh",
        background: "linear-gradient(180deg, #4d4d4d 0%, #303030 100%)"
    },
}))

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

export default function SingleModelEkran() {
    const classes = useStyles();

    const [selectedCars, setCars] = useState([]);
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.root}>
            <Grid container direction='column' >

                <Grid item >

                    <Grid container spacing={10} alignItems="center" style={{ margin: 0, maxWidth: "100%" }} >

                        <Grid item xs={2} >
                            <CardMedia component="img" image={toyota} />
                        </Grid>
                        <Grid><Divider orientation="vertical" flexItem /></Grid>
                        <Grid item xs={4}>
                            <CardMedia component="img" image={palio} />
                        </Grid>
                        <Grid><Divider orientation="vertical" flexItem /></Grid>
                        <Grid item xs={5}>

                            <Grid container direction='column' alignItems="center" style={{ textAlign: "center" }}  >
                                <Grid item xs={3}>
                                    <h4>Yıl:</h4>
                                    <p>2013</p>
                                </Grid>
                                <Grid><Divider variant='fullWidth' width="125%" /></Grid>
                                <Grid item xs={3}>

                                    <h4>Versiyon:</h4><p>1.4 Fire Dynamic Active Sole</p>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>

                <Grid item >
                </Grid>
            </Grid>
            <CarSelectDialog open={open} setOpen={setOpen} />
        </div>
    )
}