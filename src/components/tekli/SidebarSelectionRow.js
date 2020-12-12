import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import countriesJson from "../../dictionaries/countriesJson"
import { Typography } from '@material-ui/core';


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
    const countries = Object.entries(countriesJson).map(([key, value]) => ({ code: key, name: value }));

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
    return (
        <>
            <Divider />
            <Grid container style={{ justifyContent: "center" }} >
                <Grid item>
                    <h2>Seçili {selectable}: {selectedItem.name} </h2>
                </Grid>
                {showFlag && dataLoaded &&
                    <Tooltip title={getCountryTooltip()}>

                        <Grid item className={classes.flag} style={{ minWidth: 30 }} >
                            <img src={getSvg()} alt={"marka"} style={{ objectFit: 'scale-down', height: "100%" }} />
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
