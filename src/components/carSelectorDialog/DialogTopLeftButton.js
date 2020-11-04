import React, { } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

function DialogTopLeftButton(props) {
    return (
        <DialogTitle>
            <Button
                autoFocus
                onClick={props.activeStep === 0 ? props.handleClose : props.handleBack}
                startIcon={props.activeStep != 0 ? <ArrowBackIcon /> : ""}
                color="primary"
                size="large"
            >
                <Typography variant="h6">
                    {props.activeStep === 0 ? "İptal" : `${selectables[props.activeStep - 1]} seçimine geri dön`}
                </Typography>
            </Button>

        </DialogTitle>
    )
}

export default DialogTopLeftButton  