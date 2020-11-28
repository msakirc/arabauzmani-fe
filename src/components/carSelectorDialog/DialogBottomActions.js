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


export default function DialogBottomActions({
    activeStep,
    selectedMarka,
    selectedModel,
    selectedYil,
    selectedCars,
    selectables,
    handleSelectedCar,
    handleReset
}) {

    const renderDialogSelectionButtonText = (activeStep) => {
        switch (activeStep) {
            case 0:
                return "Bir seçim yapın"
            case 1:
                return `${selectedMarka.name} hakkında bilgi al`;
            case 2:
                return `${selectedModel.name} hakkında bilgi al`;
            case 3:
                return `Tüm ${selectedYil.name} ${selectedModel.name} hakkında bilgi al`;
        }
    }

    return (

        <DialogActions
        // className={classes.dialogactions}
        >
            <Grid mb={32} container style={{justifyContent:"space-between", marginRight:"35%" }} >
                <Grid item >
                    {/* <Grid container > */}

                    {!!activeStep &&
                        <Button variant="text" autoFocus edge="start" onClick={handleReset} color="primary" size="large"
                        // style={{ placeSelf="flex-start" }} 
                        >
                            İptal
                            </Button>
                    }
                    {/* </Grid> */}
                </Grid>


                <Grid item >
                    {/* {!selectedCars.length && */}
                        <Button disabled={activeStep == 0} variant="contained" onClick={handleSelectedCar} color="secondary" size="large" style={{ marginRight: "2vw" }}>
                            {renderDialogSelectionButtonText(activeStep)}
                        </Button>
                    {/* } */}
                    {/* <Button disabled={activeStep == 0} variant="contained" onClick={handleSelectedCar} color="primary" size="large">
                        {activeStep == 0 ? "Bir seçim yapın" : "Karşılaştırmaya ekle"}
                    </Button> */}

                </Grid>
            </Grid>
        </DialogActions>

    )
}