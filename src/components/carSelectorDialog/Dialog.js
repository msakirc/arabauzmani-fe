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
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Zoom from '@material-ui/core/Zoom';
import GridList from '@material-ui/core/GridList';

import { Avatar, DialogActions, Grid } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import DialogTopLeftButton from './DialogTopLeftButton';
import CarSelector from './CarSelector';

import Car from '../../models/Car'
import DialogRightContent from './DialogRightContent';
import DialogBottomActions from './DialogBottomActions';

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

const useStyles = makeStyles((theme) => ({

    dialogPaper: {
        // minHeight: '20vh',
        // maxHeight: '60vh',
    },

}))


export default function CarSelectDialog({ open, setOpen }) {



    const [selectedMarka, setMarka] = useState()
    const [selectedModel, setModel] = useState()
    const [selectedYil, setYil] = useState()
    const [selectedCars, setCars] = useState([]);

    const [activeStep, setActiveStep] = React.useState(0);

    const classes = useStyles();


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setOpen(false);
        setActiveStep(0);
    };

    const handleOpen = () => {
        setOpen(true);
        setMarka(undefined);
        setModel(undefined);
        setYil(undefined);
        setVersiyon(undefined);
    };

    const handleClose = () => {
        handleReset();
    };

    const handleSelectedCar = () => {
        setCars([...selectedCars, new Car(selectedMarka, selectedModel, selectedYil, undefined)])
        handleClose()
    };


    return (

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            closeAfterTransition
            keepMounted
            fullWidth
            maxWidth="md"
            classes={{ paper: classes.dialogPaper }}
            TransitionComponent={Zoom}
        >
            <DialogTopLeftButton activeStep={activeStep} handleBack={handleBack} handleClose={handleClose} />

            <DialogContent style={{ overflow: "hidden" }} >
                <Grid
                    container
                    alignItems='center'
                    justifyContent='space-around'
                    direction='row'
                // spacing={5}
                >

                    <Grid item xs={8} style={{ maxHeight: '100%', overflow: 'auto' }}>
                        <CarSelector
                            selectedCars={selectedCars} setCars={setCars}
                            activeStep={activeStep} setActiveStep={setActiveStep}
                            selectedMarka={selectedMarka} setMarka={setMarka}
                            selectedModel={selectedModel} setModel={setModel}
                            selectedYil={selectedYil} setYil={setYil}
                            handleClose={handleClose}
                        />

                    </Grid>

                    <Divider orientation="vertical" flexItem />

                    <Grid item xs={3} style={{ alignSelf: "stretch" }}>
                        <DialogRightContent
                            activeStep={activeStep}
                            selectedMarka={selectedMarka}
                            selectedModel={selectedModel}
                            selectedYil={selectedYil}
                            selectables={selectables}
                        />
                    </Grid>

                </Grid>
            </DialogContent >

            <DialogBottomActions
                activeStep={activeStep}
                selectedMarka={selectedMarka}
                selectedModel={selectedModel}
                selectedYil={selectedYil}
                selectedCars={selectedCars}
                handleSelectedCar={handleSelectedCar}
                handleReset={handleReset}
                selectables={selectables}
            />

        </Dialog >
    )
}