import React, { } from 'react';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';



export default function DialogRightContent({
    activeStep,
    selectedMarka,
    selectedModel,
    selectedYil,
    selectables
}) {
    return (

        < Grid container direction='column' >
            <Grid item>
                <Stepper
                    orientation="vertical"
                    activeStep={activeStep}
                >
                    {selectables.map((label) => (

                        <Step key={label}>

                            <StepLabel>
                                <Typography variant="h5">
                                    {label + " Seçimi"}
                                </Typography>
                            </StepLabel>

                        </Step>
                    ))}
                </Stepper>
            </Grid>

            <Divider variant='fullWidth' width="125%" />

            <Grid item>
                <p>buraya bazı bilgiler falan filan gelecek.</p>
            </Grid>
        </Grid >
    )
}