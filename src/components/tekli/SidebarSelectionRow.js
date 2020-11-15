import React, {  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({


}))

export default function SidebarSelectionRow({
    selectedItem,
    selectableIndex,
    selectable,
    rowEditAction
}) {

    return (
        <>
            <Divider />
            <Grid container style={{ justifyContent: "center", width: "auto", marginLeft: "25%", marginRight: "10%" }} >
                <Grid item>
                    <h2>Seçili {selectable}: {selectedItem} </h2>
                </Grid>
                <Grid item style={{ alignSelf: "flex-end" }}>
                    <Button size="large" onClick={() => rowEditAction(selectableIndex)} >[ değiştir ]</Button>
                </Grid>
            </Grid>
        </>
    )
}
