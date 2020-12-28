import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import countriesJson from "../../dictionaries/countriesJson"
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

import firebase from '../../firebase/init-firebase'

const useStyles = makeStyles((theme) => ({
    flag: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))


export default function SidebarSelectionRow({
    selectedItem,
    selectableIndex,
    selectable,
    rowEditAction,
    dataLoaded = false,
    showFlag = false,
    data
}) {

    const classes = useStyles();
    const storage = firebase.default.storage()
    const countries = Object.entries(countriesJson).map(([key, value]) => ({ code: key, name: value }));

    const [flag, setFlag] = useState()
    const [flagLoaded, setFlagLoaded] = useState(false)

    useEffect(() => {
        if (!dataLoaded) {
            setFlagLoaded(false)
            return
        }

        let code = getCountryCode()
        if (!!code)
            storage.ref("assets/countries/" + code.toLowerCase() + ".svg").getDownloadURL().then(url => setFlag(url))

        // storage.ref("assets/countries/global.svg").getDownloadURL().then( url => setFlag(url) )

    }, [dataLoaded]);

    function getCountryCode() {
        if (!dataLoaded)
            return undefined
        if (!!data.marka)
            return data.marka.countryOfOrigin

        return data.countryOfOrigin
    }

    function getCountryTooltip() {
        return (
            <Typography variant="h5" >
                {getCountryName()}
            </Typography>
        )

    }

    function getCountryName() {

        let countryCode = getCountryCode()

        if (countryCode === undefined)
            return "Bilinmiyor"

        return countries.find((country) => country.code === countryCode).name.name_tr
    }

    function handleImageLoaded() {
        console.log("giriyo olm işte")
        setFlagLoaded(true)
    }

    return (
        <>
            <Divider />
            <Grid container style={{ justifyContent: "center" }} >
                <Grid item>
                    <h2>Seçili {selectable}: {selectedItem.name} </h2>
                </Grid>
                {showFlag && dataLoaded &&
                    <Tooltip title={getCountryTooltip()}>

                        <Grid item className={classes.flag} style={{ minWidth: 30, placeSelf: "center" }} >


                            <Fade
                                in={!flagLoaded}
                                unmountOnExit
                            >
                                <CircularProgress size={20} />
                            </Fade>

                            <img src={flag} alt={"marka"} onLoad={() => handleImageLoaded()}
                                style={{ objectFit: 'scale-down', height: "100%", visibility: flagLoaded ? "visible" : "hidden" }}
                            />
                        </Grid>
                    </Tooltip>
                }

                <Grid item style={{ alignSelf: "flex-end" }}>
                    <Button size="large" onClick={() => rowEditAction(selectableIndex)} >[ değiştir ]</Button>
                </Grid>


            </Grid>
        </>
    )
}
