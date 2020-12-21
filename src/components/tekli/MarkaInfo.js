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
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
import GaugeChart from '../data-visualization/gauge';
import ListSubheader from '@material-ui/core/ListSubheader';
import Image from 'material-ui-image'

import get from '../../requests/request';

import { MARKALAR, MODELLER, YILLAR, VERSIYONLAR, DETAIL } from '../../requests/endpoints';
import gridsizer from '../utils/gridsizer';
// import countries_in_turkish from '../utils/countries_in_turkish';

import countriesJson from "../../dictionaries/countriesJson"
import GridSizer from '../utils/gridsizer';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
        color: "#FFEB3B"
    },
    tileRoot: {

    },

    tile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        flex: "auto"
    },
    container: {
        padding: theme.spacing(1),

    }
}))

export default function MarkaInfo({
    open,
    selectedMarka,
    selectedModel,
    selectedYil,
    selectedVersiyon,
    markaSecili,
    modelSecili,
    yilSecili,
    versiyonSecili,
    data,
    dataLoaded
}) {
    const classes = useStyles();

    const countries = Object.entries(countriesJson).map(([key, value]) => ({ code: key, name: value }));

    function header() {
        if (!dataLoaded)
            return " ";

        let finalString = ""

        if (markaSecili)
            finalString += selectedMarka.name + " "

        finalString += " bilgileri"
        return finalString
    }

    function getCountryCode() {
        if (!dataLoaded)
            return undefined
        if (!!data.marka)
            return data.marka.countryOfOrigin

        return data.countryOfOrigin
    }

    function getSvg() {

        if (!dataLoaded)
            return

        let code = getCountryCode()
        if (!!code)
            return "../../../public/images/countries/" + code.toLowerCase() + ".svg"
        return "../../../public/images/countries/global.svg"

    }

    function getCountryName() {

        let countryCode = getCountryCode()

        if (countryCode === undefined)
            return "Bilinmiyor"

        return countries.find((country) => country.code === countryCode).name.name_tr
    }

    function getMalzemeKalitesiScore() {
        if (!dataLoaded)
            return

        if (!!data.marka)
            return data.marka.malzemeKalitesiScore

        return data.malzemeKalitesiScore
    }

    function getServisScore() {
        if (!dataLoaded)
            return

        if (!!data.marka)
            return data.marka.servisScore

        return data.servisScore
    }


    function getYedekParcaScore() {
        if (!dataLoaded)
            return

        if (!!data.marka)
            return data.marka.yedekParcaScore

        return data.yedekParcaScore
    }


    function getGuvenlikScore() {
        if (!dataLoaded)
            return

        if (!!data.marka)
            return data.marka.guvenlikScore

        return data.guvenlikScore
    }

    return (
        <>
            <Typography gutterBottom className={classes.typography} variant="h5" >{header()}</Typography>


            <GridList
            //  className={classes.container}
              cellHeight={160} cols={GridSizer} style={{ margin: 0 }}>

                <GridListTile key="malzemeKalitesi" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} style={{ margin: 0, padding : 0 }}>
                    <GaugeChart score={getMalzemeKalitesiScore()} label="Malzeme Kalitesi" />
                </GridListTile>
                <GridListTile key="servisAgi" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} style={{ margin: 0, padding : 0 }}>
                    <GaugeChart score={getServisScore()} label="Servis Ağı" />
                </GridListTile>
                <GridListTile key="yedekParca" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} style={{ margin: 0, padding : 0 }}>
                    <GaugeChart score={getYedekParcaScore()} label="Yedek Parça" />
                </GridListTile>
                <GridListTile key="guvenlik" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} style={{ margin: 0, padding : 0 }}>
                    <GaugeChart score={getGuvenlikScore()} label="Güvenlik" />
                </GridListTile>
            </GridList>

        </>
    )
}