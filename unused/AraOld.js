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

import { Avatar, DialogActions } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';





import palio from "../../public/images/Fiat_Palio_3door.jpg"
import Car from '../src/models/Car';

const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
  },
];

const items = [
  "Hepsi",
  'Google',
  'TED',
  'GitHub',
  'Big Think',
  'Microsoft'
]
const items2 = [
  "Hepsi",
  'Google',
  'TED'
]
const items3 = [
  'GitHub',
  'Big Think',
  'Microsoft'
]

const selectables = ["Marka", "Model", "Yıl", "Versiyon"]

const useStyles = makeStyles((theme) => ({

  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default
  },
  card: {
    width: "12.5%",
    height: "20%",
    media: {
      height: "85%"
    },
    header: {
      maxHeight: "15%",

    }
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },


  leftStepper: {
    padding: "2vh ",
    width: '100%',
  },

  rightBox: {
    paddingLeft: "2vw ",
    width: '100%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  rightStepper: {
    //   padding: "2vw ",
    //   width: '100%', 
    //   display: 'flex',
    //   // alignItems: 'start',
    //   justifyContent: 'center',
  },

  dialogCustomizedWidth: {
    width: '50vw',
    maxWidth: "60vw",
    height: "40vh"
  },

  appBar: {
    position: 'relative',
  },

  displayContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    "flex-direction": "row"
  },

  dialogactions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: "1vh",
    marginRight: "1vh",
    marginBottom: "1vh",
    marginInlineEnd: "30%"
  },


  rightGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  modalListHeader: {
    "fontSize": "2rem",

    h6: {
      "fontSize": "2rem"
    },
    h2: {
      "fontSize": "2rem"
    }
  },

  MuiTypography: {
    h2: {
      "fontSize": "2rem"
    },
    h6: {
      "fontSize": "2rem"
    }
  },

  mainBox: {
    display:"flex",
    justifyContent:"space-around",
    marginTop:"20vh"
  },

  aracekle:{

  }
}));

export default function Ara() {

  const [selectedCars, setCars] = useState([]);

  const [selection, setValues] = useState([]);
  const [selectedMarka, setMarka] = useState()
  const [selectedModel, setModel] = useState()
  const [selectedYil, setYil] = useState()
  const [selectedVersiyon, setVersiyon] = useState()

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setOpen(false);
    setActiveStep(0);
  };

  const handleOpen = () => {
    setMarka(undefined);
    setModel(undefined);
    setYil(undefined);
    setVersiyon(undefined);
    setOpen(true);

    
    setValues({
      marka: undefined,
      model: undefined,
      yil: undefined,
      version: undefined
    })
  };

  const handleClose = () => {
    handleReset();
  };

  const handleMarkaSelection = (item) => {
    setMarka(item);
    handleNext();
  };

  const handleModelSelection = (item) => {
    setModel(item);
    handleNext();
  };

  const handleYilSelection = (item) => {
    setYil(item);
    handleNext();
  };

  const handleVersiyonSelection = (item) => {
    setVersiyon(item);
    setCars([...selectedCars, new Car(selectedMarka, selectedModel, selectedYil, item)])
    handleClose()
  };

  const handleSelectedCar = () => {
    setCars([...selectedCars, new Car(selectedMarka, selectedModel, selectedYil, selectedVersiyon)])
    handleClose()
  };

  const renderDialogTitle = () => {
    switch (activeStep) {
      case 0:
        return "Tüm markalar";
      case 1:
        return `Tüm ${selectedMarka} modelleri`;
      case 2:
        return `Tüm ${selectedMarka} ${selectedModel} yılları`;
      case 3:
        return `Tüm ${selectedYil} ${selectedMarka} ${selectedModel} versiyonları`;
      default:
        return `${activeStep}`;
    }
  }

  const renderDialogSecondButton = (activeStep) => {
    switch (activeStep) {
      case 0:
        return "Bir seçim yapın"
      case 1:
        return `${selectedMarka} hakkında bilgi al`;
      case 2:
        return `${selectedModel} hakkında bilgi al`;
      case 3:
        return `Tüm ${selectedYil} ${selectedModel} hakkında bilgi al`;
    }
  }

  const cards = selectedCars.map((car, index) => (

    <Card className={classes.card}  >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.card.media}
          image={palio}
          title="Contemplative Reptile"
        />

        <CardHeader
          avatar={
            <Avatar aria-label="avatar" className={classes.avatar}>
              {index + 1}
            </Avatar>
          }
          title={selectedMarka}
        />
      </CardActionArea>
      {/* <CardActions>
      <Button size="small" color="primary">
        Share
    </Button>
      <Button size="small" color="primary">
        Learn More
    </Button>
    </CardActions> */}
    </Card>
  ))

  return (
    <div className={classes.root} height="100vh" >

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        keepMounted
        fullWidth
        classes={{ paperFullWidth: classes.dialogCustomizedWidth }}
        TransitionComponent={Zoom}
      >
        <DialogTitle >
          <Button
            autoFocus
            onClick={activeStep === 0 ? handleClose : handleBack}
            startIcon={activeStep != 0 ? <ArrowBackIcon /> : ""}
            color="primary"
            style={{ "fontSize": "1.35rem" }}
          >
            {activeStep === 0 ? "İptal" : `${selectables[activeStep - 1]} seçimine geri dön`}
          </Button>

        </DialogTitle>

        {/* <Box className={classes.modal.box}> */}
        <DialogContent className={classes.displayContent}>

          <Box style={{ flex: 7, padding: 0, display: "flex", alignItems: "center", direction: "column", flexDirection: "column", placeSelf: "flex-start" }}>
            <Typography component={DialogTitle} classes={{ h6: classes.modalListHeader }} style={{ "padding": "0", paddingBottom: "2vh", h6: { "fontSize": "2rem" }, h2: { "fontSize": "2rem" } }}>
              {renderDialogTitle()}
            </Typography>
            <Stepper activeStep={activeStep} style={{ padding: 0, display: "flex", justifyContent: "center" }}  >
              <SwipeableViews index={activeStep}>

                <Step key={"Marka"} style={{ width: "100%", padding: 0, display: "flex", justifyContent: "center" }}>
                  <List style={{ width: "60%" }} >
                    {items.map((item, index) => (

                      <ListItem button key={item} onClick={() => handleMarkaSelection(item)} divider={index != items.length - 1} style={{}}  >
                        <ListItemText
                          primary={
                            <Typography align="center" color="textPrimary">
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Step>

                <Step key={"Model"} style={{ width: "100%", padding: 0, display: "flex", justifyContent: "center" }}>
                  <List style={{ width: "60%" }} >
                    {items2.map((item, index) => (

                      <ListItem button key={  } onClick={() => handleModelSelection(item)} divider={index != items.length - 1} style={{}}  >
                        <ListItemText
                          primary={
                            <Typography align="center" color="textPrimary">
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Step>

                <Step key={"Yıl"} style={{ width: "100%", padding: 0, display: "flex", justifyContent: "center" }}>

                  <List style={{ width: "60%" }} >
                    {items.map((item, index) => (

                      <ListItem button key={item} onClick={() => handleYilSelection(item)} divider={index != items.length - 1} style={{}}  >
                        <ListItemText
                          primary={
                            <Typography align="center" color="textPrimary">
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Step>

                <Step key={"Versiyon"} style={{ width: "100%", padding: 0, display: "flex", justifyContent: "center" }}>
                  <List style={{ width: "60%" }} >
                    {items.map((item, index) => (

                      <ListItem button key={item} onClick={() => handleVersiyonSelection(item)} divider={index != items.length - 1} style={{}}  >
                        <ListItemText
                          primary={
                            <Typography align="center" color="textPrimary">
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Step>

              </SwipeableViews>
            </Stepper>
          </Box>

          <Divider orientation="vertical" flexItem />

          <Box className={classes.rightBox} style={{ flex: 2, }}>

            <Stepper className={classes.rightStepper} orientation="vertical" activeStep={activeStep} >
              {selectables.map((label) => (
                <Step key={label}>
                  <StepLabel
                    StepIconProps={{
                      classes: { root: classes.icon }
                    }}
                  >

                    <Typography variant="h5" className={classes.title}>
                      {label + " Seçimi"}
                    </Typography>


                  </StepLabel>
                </Step>
              ))}
            </Stepper>

          </Box>
        </DialogContent>

        <DialogActions className={classes.dialogactions}>
          <Box>
            {!!activeStep &&
              <Button variant="text" autoFocus edge="start" onClick={handleReset} color="primary" size="large">
                İptal
              </Button>
            }
          </Box>

          <Box className={classes.rightGroup} >

            {/* <Box> */}
            {!selectedCars.length &&
              <Button disabled={activeStep == 0} variant="contained" onClick={handleSelectedCar} color="secondary" size="large" style={{ marginRight: "2vw" }}>
                {renderDialogSecondButton(activeStep)}
              </Button>
            }
            {/* </Box>
            <Box> */}
            <Button disabled={activeStep == 0} variant="contained" onClick={handleSelectedCar} color="primary" size="large">
              {activeStep == 0 ? "Bir seçim yapın" : "Karşılaştırmaya ekle"}
            </Button>
            {/* </Box> */}

          </Box>
        </DialogActions>



      </Dialog>

      <Box className={classes.mainBox}>
        <Button className={classes.aracekle} onClick={handleOpen} variant="contained" size="large" color="primary" >
          araç ekle
        </Button>
        <Button className={classes.karsilastir}  variant="contained" size="large" color="secondary" >
          karşılaştır
        </Button>
      </Box>
      <Box >
        {cards}
      </Box>



    </div >
  );
}
