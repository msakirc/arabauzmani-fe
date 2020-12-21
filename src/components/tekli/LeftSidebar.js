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


import HalfCar from "../../../public/images/half-car.jpg"
import palio from "../../../public/images/Fiat_Palio_3door.jpg"
import corolla from "../../../public/images/Corolla-sedan.jpg"
import toyota from "../../../public/images/toyota.png"
import Car from '../../models/Car';
import CarSelectDialog from '../carSelectorDialog/Dialog';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SidebarSelectionRow from './SidebarSelectionRow';

const drawerWidth = "20%";

const useStyles = makeStyles((theme) => ({

    root: {
        // width: "100vw",
        // height: "100vh",
        // background: "linear-gradient(180deg, #4d4d4d 0%, #303030 100%)"
    },
    drawer: {
        width: "20%",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "20%",
    }
}))

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

export default function LeftSidebar({
    selectedMarka,
    selectedModel,
    selectedYil,
    selectedVersiyon,
    setActiveStep,
    setOpen,
    markaSecili, setMarkaSecili,
    modelSecili, setModelSecili,
    yilSecili, setYilSecili,
    versiyonSecili, setVersiyonSecili,
    dataLoaded,
    data
}) {
    const classes = useStyles();


    const resetVersiyon = (newActiveStep) => {
        setVersiyonSecili(false)
        setActiveStep(newActiveStep)
        setOpen(true)
    }
    const resetYil = (newActiveStep) => {
        setYilSecili(false)
        resetVersiyon(newActiveStep)
    }
    const resetModel = (newActiveStep) => {
        setModelSecili(false)
        resetYil(newActiveStep)
    }
    const resetMarka = (newActiveStep) => {
        setMarkaSecili(false)
        resetModel(newActiveStep)
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <h1>ARABA UZMANI</h1>
            {
                markaSecili &&
                <SidebarSelectionRow
                    selectedItem={selectedMarka}
                    selectableIndex={0}
                    selectable={selectables[0]}
                    rowEditAction={resetMarka}
                    dataLoaded={dataLoaded}
                    showFlag={true}
                    data={data}
                />
            }
            {
                modelSecili &&
                <SidebarSelectionRow
                    selectedItem={selectedModel}
                    setActiveStep={setActiveStep}
                    selectableIndex={1}
                    selectable={selectables[1]}
                    rowEditAction={resetModel}
                />
            }
            {
                yilSecili &&
                <SidebarSelectionRow
                    selectedItem={selectedYil}
                    setActiveStep={setActiveStep}
                    selectableIndex={2}
                    selectable={selectables[2]}
                    rowEditAction={resetYil}
                />
            }
            {
                versiyonSecili &&
                <SidebarSelectionRow
                    selectedItem={selectedVersiyon}
                    setActiveStep={setActiveStep}
                    selectableIndex={3}
                    selectable={selectables[3]}
                    rowEditAction={resetVersiyon}
                />
            }
        </Drawer >
    )
}