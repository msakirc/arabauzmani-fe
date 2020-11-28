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
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";

export default function GaugeChart({ score, label }) {
    if ( !score )
        return (<></>);
    

    const series = [ parseFloat(score) * 10]
    const options = {
        chart: {
            type: 'radialBar',
        },
        colors: ["#20E647"],

        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '1.75rem',
                        color: "#ffffff",
                        offsetY: 75
                    },
                    value: {
                        offsetY: -5,
                        fontSize: '2.25rem',
                        color: "#ffffff",
                        formatter: function (val) {
                            return val / 10;
                        }
                    }
                },
                track: {
                  background: '#585858'
                }
            }
        },
        fill: {
            type: 'solid',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
            },
        },
        stroke: {
            dashArray: 3
        },
        labels: [label],
    };



    return (
        <Chart
            options={options}
            series={series}
            // type="bar"
            type="radialBar"
            width="80%"
        />


    )
}