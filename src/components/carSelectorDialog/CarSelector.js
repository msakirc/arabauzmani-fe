import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import useAxios from 'axios-hooks'

import Car from '../../models/Car'
import get from '../../requests/request';

import { MARKALAR, FIND_ALL, MODELLER, YILLAR, VERSIYONLAR } from '../../requests/endpoints';

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
    open,
    handleClose,
    setMarkaSecili,
    setModelSecili,
    setYilSecili,
    setVersiyonSecili
}) {
    // const [markadata, setWeatherDetails] = useState(null) // <-- use null initial state

    useEffect(() => {
        console.log("useeffecte girdi")
        if (!open)
            return;
        console.log("return olmadı")

        if (activeStep === 0)
            get(MARKALAR + FIND_ALL)
                .then(data => {
                    setMarkalar(data)
                    console.log("çekili markalar:", markalar);
                })
    }, [])


    const [markalar, setMarkalar] = useState(["Markalar yükleniyor."]);
    const [modeller, setModeller] = useState(["Modeller yükleniyor."]);
    const [yillar, setYillar] = useState(["Model yılları yükleniyor."]);
    const [versiyonlar, setVersiyonlar] = useState(["Model versiyonları yükleniyor."]);


    const handleMarkaSelection = (item) => {
        setMarka(item);
        setMarkaSecili(true)
        get(MODELLER + FIND_ALL, { markaId: item.id })
        .then(data => {
            setModeller(data)
            console.log("çekili modeller:", modeller);
        })
        handleNext();
    };

    const handleModelSelection = (item) => {
        setModel(item);
        setModelSecili(true)
        get(YILLAR + FIND_ALL, { modelId: item.id })
        .then(data => {
            setYillar(data)
            console.log("çekili yıllar:", yillar);
        })
        handleNext();
    };

    const handleYilSelection = (item) => {
        setYil(item);
        setYilSecili(true)
        get(VERSIYONLAR + FIND_ALL, { yilId: item.id })
        .then(data => {
            setVersiyonlar(data)
            console.log("çekili versiyonlar:", versiyonlar);
        })
        handleNext();
    };

    const handleVersiyonSelection = (item) => {
        setVersiyon(item);
        setVersiyonSecili(true)
        setCars([...selectedCars, new Car(selectedMarka, selectedModel, selectedYil, item)])
        handleClose(item)
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


    const renderListTitle = () => {
        switch (activeStep) {
            case 0:
                return "Tüm markalar";
            case 1:
                return `Tüm ${selectedMarka.name} modelleri`;
            case 2:
                return `Tüm ${selectedMarka.name} ${selectedModel.name} yılları`;
            case 3:
                return `Tüm ${selectedYil.name} ${selectedMarka.name} ${selectedModel.name} versiyonları`;
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
                        <List style={{ maxHeight: '100%', overflow: 'auto' }} >
                            {fillListItems(items.slice(columnSize * index, columnSize * (index + 1)), handler)}
                        </ List>
                    )
                })}
            </Step>
        )
    }

    function fillListItems(listItems, handler) {
        return listItems.map((item, index) => {
            return <ListItem button key={item.id} onClick={() => handler(item)} divider={index != listItems.length - 1}>
                {console.log("list item:", item)}
                <ListItemText
                    primary={
                        <Typography align="center" color="textPrimary" variant="h6" >
                            {!!item.name ? item.name : item}
                        </Typography>}
                />
            </ListItem>
        })
    }

    return (

        <Grid container alignItems='center' justifyContent='space-around' direction='column' >
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