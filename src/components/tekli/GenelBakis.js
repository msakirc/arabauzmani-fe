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

import get from '../../requests/request';

import { MARKALAR, MODELLER, YILLAR, VERSIYONLAR, DETAIL } from '../../requests/endpoints';
import { fullRowSize, twoThirdSize, oneThirdSize } from '../utils/gridsizer';
import DataCard from '../data-visualization/DataCard';



const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    color: "#FFEB3B"
  },
  tileRoot: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0), 
  },

  tile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
}))

export default function GenelBakis({
  open,
  selectedMarka,
  selectedModel,
  selectedYil,
  selectedVersiyon,
  markaSecili,
  modelSecili,
  yilSecili,
  versiyonSecili,
  data
}) {
  const classes = useStyles();

  return (
    <>
      {/* <Typography gutterBottom className={classes.typography} variant="h5" >Modele Genel Bakış</Typography> */}

      <GridList cellHeight={160} cols={oneThirdSize} style={{ margin: 0 }}>
        <GridListTile key="kasa" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
          <DataCard value="Hatchback 3 Kapı" label="Kasa Tipi" image="assets/fuel.png" />
        </GridListTile>
        <GridListTile key="max" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
          <DataCard value="214 km/saat" label="Maksimum Hız" image="assets/fuel.png" />
        </GridListTile>
        <GridListTile key="vites" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
          <DataCard value="Yarı Otomatik" label="Vites" image="assets/fuel.png" />
        </GridListTile>
      </GridList>
      <GridList cellHeight={160} cols={oneThirdSize} style={{ margin: 0 }}>
        <GridListTile key="beygir" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
          <DataCard value="84 beygir" label="Motor Gücü" image="assets/fuel.png" />
        </GridListTile>
        <GridListTile key="yakit" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
          <DataCard value="8,3 lt / 5.9 lt" label={`Yakıt Tüketimi
                    (Şehir İçi / Şehir Dışı)`} image="assets/fuel.png" />
        </GridListTile>
        <GridListTile key="hizlanma" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
          <DataCard value="11,1 sn" label="0-100 Hızlanma" image="assets/fuel.png" />
        </GridListTile>
        <GridListTile key="bagaj" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
          <DataCard value="232 lt" label={"Bagaj\nKapasitesi"} image="assets/fuel.png" />
        </GridListTile>
      </GridList>
    </>
  )
}