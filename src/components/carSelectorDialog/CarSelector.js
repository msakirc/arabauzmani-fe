import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';

import Car from '../../models/Car'

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

const markalar = [
    "Toyota",
    "Ford",
    "Fiat",
    "Tofaş",
    "Tata",
    "Citroen",
    "Honda",
    "Hyundai",
    "Renault",
    "Opel",
    "Wolkswagen",
    "Dacia",
    "Chevrolet",
    "Seat"
]

const modeller = [
    "Corolla",
    "Yaris",
    "Auris"
]

const yillar = [
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
]

const versiyonlar = [
    "asd",
    "dfs",
    "sffg",
    "sgg",
    "gfdgdf",
    "fdgdf",
    "fdg",
    "fg"
]

export default function CarSelector({
    selectedCars, setCars,
    activeStep, setActiveStep,
    selectedMarka, setMarka,
    selectedModel, setModel,
    selectedYil, setYil,
    setVersiyon,
    handleClose
}) {

    const handleMarkaSelection = (item) => {
        setMarka(item);
        handleNext();
    };

    const handleModelSelection = (item) => {
        setModel(item);
        handleNext();
    };

    const handleYilSelection = (item) => {
        setYil(item);
        handleNext();
    };

    const handleVersiyonSelection = (item) => {
        setVersiyon(item);
        setCars([...selectedCars, new Car(selectedMarka, selectedModel, selectedYil, item)])
        handleClose()
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


    const renderListTitle = () => {
        switch (activeStep) {
            case 0:
                return "Tüm markalar";
            case 1:
                return `Tüm ${selectedMarka} modelleri`;
            case 2:
                return `Tüm ${selectedMarka} ${selectedModel} yılları`;
            case 3:
                return `Tüm ${selectedYil} ${selectedMarka} ${selectedModel} versiyonları`;
            default:
                return `${activeStep}`;
        }
    }

    function prepareStepContent(selectable, items, handler) {

        let listSize = items.length
        let columns = Math.ceil(listSize / 12)
        let columnSize = Math.ceil(listSize / columns)

        return (
            <Step key={selectable} style={{ display: "flex", justifyContent: "space-around", flexDirection: "row" }}>
                {[...Array(columns)].map((col, index) => {
                    return (
                        <List style={{maxHeight: '100%', overflow: 'auto'}} >
                            {fillListItems(items.slice(columnSize * index, columnSize * (index + 1)), handler)}
                        </ List>
                    )
                })}
            </Step>
        )
    }

    function fillListItems(listItems, handler) {
        return listItems.map((item, index) => {
            return <ListItem button key={item} onClick={() => handler(item)} divider={index != listItems.length - 1}>
                {console.log(item)}
                <ListItemText
                    primary={
                        <Typography align="center" color="textPrimary" variant="h6" >
                            {item}
                        </Typography>}
                />
            </ListItem>
        })
    }

    return (

        <Grid container alignItems='center' justifyContent='space-around' direction='column' >
            {console.log(selectables)}
            <Typography variant="h4" >
                {renderListTitle()}
            </Typography>
            <Stepper activeStep={activeStep}>
                <SwipeableViews index={activeStep}>
                    {prepareStepContent(selectables[0], markalar, handleMarkaSelection)}
                    {prepareStepContent(selectables[1], modeller, handleModelSelection)}
                    {prepareStepContent(selectables[2], yillar, handleYilSelection)}
                    {prepareStepContent(selectables[3], versiyonlar, handleVersiyonSelection)}
                </SwipeableViews>
            </Stepper>

        </Grid>
    )
}