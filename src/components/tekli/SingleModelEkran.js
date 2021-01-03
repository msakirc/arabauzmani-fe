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
import GaugeChart from '../data-visualization/gauge';
import ListSubheader from '@material-ui/core/ListSubheader';

import get from '../../requests/request';

import { MARKALAR, MODELLER, YILLAR, VERSIYONLAR, DETAIL } from '../../requests/endpoints';
import gridsizer from '../utils/gridsizer';
import Puanlar from './Puanlar';
import MarkaInfo from './MarkaInfo';
import GenelBakis from './GenelBakis';


const useStyles = makeStyles((theme) => ({

    root: {

    },
    mainContainer: {
        width: "78%",
        marginLeft: "21%",
        marginRight: "1%",
    },

    tileRoot: {

    },

    tile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },

    typography: {
        margin: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },

    divider: {
        margin: theme.spacing(4),
    },
}))

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

export default function SingleModelEkran() {
    const classes = useStyles();

    const [selectedMarka, setMarka] = useState({ name: 'Lütfen bir seçim yapın' })
    const [selectedModel, setModel] = useState('Seçim yapılmadı')
    const [selectedYil, setYil] = useState({ name: 'Seçim yapılmadı' })
    const [selectedVersiyon, setVersiyon] = useState({ name: 'Seçim yapılmadı' })

    const [markaSecili, setMarkaSecili] = useState(false)
    const [modelSecili, setModelSecili] = useState(false)
    const [yilSecili, setYilSecili] = useState(false)
    const [versiyonSecili, setVersiyonSecili] = useState(false)


    const [data, setData] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);

    const [selectedCars, setCars] = useState([]);

    const [open, setOpen] = React.useState(true);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleSelectionCompleted = (selectedVersiyon = "Seçim yapılmadı") => {
        let requestTarget;
        let requestId;

        switch (activeStep) {
            case 3:
                if (selectedVersiyon && selectedVersiyon.id) {
                    requestTarget = VERSIYONLAR
                    requestId = selectedVersiyon.id
                    break;
                }
            case 2:
                if (selectedYil && selectedYil.id) {
                    requestTarget = YILLAR
                    requestId = selectedYil.id
                    break;
                }
            case 1:
                if (selectedModel && selectedModel.id) {
                    requestTarget = MODELLER
                    requestId = selectedModel.id
                    break;
                }
            case 0:
                if (selectedMarka && selectedMarka.id) {
                    requestTarget = MARKALAR
                    requestId = selectedMarka.id
                    break;
                }
            default:
                break;
        }

        get(requestTarget + DETAIL, { id: requestId })
            .then(response => {
                setData(response)
                setDataLoaded(true)
                console.log("çekili data:", response);
            })
    }


    return (
        <div className={classes.root} style={{ paddingTop: "1%" }}>
            <LeftSidebar
                selectedMarka={selectedMarka}
                selectedModel={selectedModel}
                selectedYil={selectedYil}
                selectedVersiyon={selectedVersiyon}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                setOpen={setOpen}
                markaSecili={markaSecili} setMarkaSecili={setMarkaSecili}
                modelSecili={modelSecili} setModelSecili={setModelSecili}
                yilSecili={yilSecili} setYilSecili={setYilSecili}
                versiyonSecili={versiyonSecili} setVersiyonSecili={setVersiyonSecili}
                dataLoaded={dataLoaded}
                data={data}
            />
            <div className={classes.mainContainer}>

                <GenelBakis
                    open={open}
                    selectedMarka={selectedMarka}
                    selectedModel={selectedModel}
                    selectedYil={selectedYil}
                    selectedVersiyon={selectedVersiyon}
                    markaSecili={markaSecili}
                    modelSecili={modelSecili}
                    yilSecili={yilSecili}
                    versiyonSecili={versiyonSecili}
                    data={data}
                />

                <Divider variant="middle" className={classes.divider} />

                <Puanlar
                    open={open}
                    selectedMarka={selectedMarka}
                    selectedModel={selectedModel}
                    selectedYil={selectedYil}
                    selectedVersiyon={selectedVersiyon}
                    markaSecili={markaSecili}
                    modelSecili={modelSecili}
                    yilSecili={yilSecili}
                    versiyonSecili={versiyonSecili}
                    data={data}
                />

                <Divider variant="middle" className={classes.divider} />

                <MarkaInfo
                    open={open}
                    selectedMarka={selectedMarka}
                    selectedModel={selectedModel}
                    selectedYil={selectedYil}
                    selectedVersiyon={selectedVersiyon}
                    markaSecili={markaSecili}
                    modelSecili={modelSecili}
                    yilSecili={yilSecili}
                    versiyonSecili={versiyonSecili}
                    data={data}
                    dataLoaded={dataLoaded}
                />
                <Divider variant="middle" className={classes.divider} />

            </div>

            <CarSelectDialog
                open={open} setOpen={setOpen}
                activeStep={activeStep} setActiveStep={setActiveStep}
                selectedMarka={selectedMarka} setMarka={setMarka}
                selectedModel={selectedModel} setModel={setModel}
                selectedYil={selectedYil} setYil={setYil}
                selectedVersiyon={selectedVersiyon} setVersiyon={setVersiyon}
                selectedCars={selectedCars} setCars={setCars}
                setMarkaSecili={setMarkaSecili}
                setModelSecili={setModelSecili}
                setYilSecili={setYilSecili}
                setVersiyonSecili={setVersiyonSecili}
                handleSelectionCompleted={handleSelectionCompleted}
                setDataLoaded={setDataLoaded}
            />
        </div >
    )
}