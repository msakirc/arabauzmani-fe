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
import Drawer from '@material-ui/core/Drawer';
import { spacing } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


import { Avatar, DialogActions, Grid } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';


import palio from "../../../public/images/Fiat_Palio_3door.jpg"
import corolla from "../../../public/images/Corolla-sedan.jpg"
import toyota from "../../../public/images/toyota.png"
import Car from '../../models/Car';
import CarSelectDialog from '../carSelectorDialog/Dialog';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LeftSidebar from './LeftSidebar';


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
        // width: "100vw",
        // height: "100vh",
        // background: "linear-gradient(180deg, #4d4d4d 0%, #303030 100%)"
    },
    mainContainer: {
        width: "80%",
        marginLeft: "20%",
    },
    gridList: {
        margin: "0px"
    },
    tileRoot: {

    },

    tile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },

    fieldTile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-end"
    },

    selectionTile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start"
    },

    titleBar: {
        paddingLeft: "10%",
        paddingRight: "10%",
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 0%)',
    },

    gridTitle: {
        fontSize: "1.5rem"
    },

    gridSubtitle: {
        fontSize: "1.1rem"
    },


    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
    },
}))

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

export default function SingleModelEkran() {
    const classes = useStyles();

    const [selectedMarka, setMarka] = useState('Lütfen bir seçim yapın')
    const [selectedModel, setModel] = useState('undefined')
    const [selectedYil, setYil] = useState('undefined')
    const [selectedVersiyon, setVersiyon] = useState('undefined')
    const [selectedCars, setCars] = useState([]);

    const [open, setOpen] = React.useState(true);
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <div className={classes.root}>
            <LeftSidebar
                selectedMarka={selectedMarka}
                selectedModel={selectedModel}
                selectedYil={selectedYil}
                selectedVersiyon={selectedVersiyon}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                setOpen={setOpen}
            />
            <div className={classes.mainContainer}>

                <GridList cellHeight={160} cols={12} style={{ margin: 0 }}>
                    <GridListTile key="konfor" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} >
                        <p>Konfor Puanı</p>
                        <CircularProgressbar
                            value={66}
                            text={`${66}%`}
                        />
                    </GridListTile>
                    <GridListTile key="estetik" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} >
                        <p>Estetik Puanı</p>
                        <CircularProgressbar
                            value={66}
                            text={`${66}%`}
                        />
                    </GridListTile>
                    <GridListTile key="fp" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} >
                        <p>Fiyat/Değer Puanı</p>
                        <CircularProgressbar
                            value={66}
                            text={`${66}%`}
                        />
                    </GridListTile>
                    <GridListTile key="overall" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} >
                        <p>Konfor Puanı</p>
                        <CircularProgressbar
                            value={66}
                            text={`${66}%`}
                        />
                    </GridListTile>
                </GridList>
            </div>

            <CarSelectDialog
                open={open} setOpen={setOpen}
                activeStep={activeStep} setActiveStep={setActiveStep}
                selectedMarka={selectedMarka} setMarka={setMarka}
                selectedModel={selectedModel} setModel={setModel}
                selectedYil={selectedYil} setYil={setYil}
                selectedVersiyon={selectedVersiyon} setVersiyon={setVersiyon}
                selectedCars={selectedCars} setCars={setCars}
            />
        </div >
    )
}