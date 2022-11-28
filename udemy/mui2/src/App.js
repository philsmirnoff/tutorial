import { Button, Typography, styled } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import CurrencyYuanIcon from '@mui/icons-material/CurrencyYuan';

function App() {
  const BlueButton = styled(Button)(({theme}) => ({
    backgroundColor: 'theme.palette.otherColor.main',
    color: 'white',
    '&:hover': {
      backgroundColor: 'yellow',
    },
    "&:disabled": {
      backgroundColor: 'red',
    },
  }));

  return (
    <div>
     <Button
        startIcon={<CardTravelIcon/>}
        variant="text"
        color="secondary"
      >
        Text
    </Button>
     <Button
        startIcon={<CarRentalIcon/>}
        variant="contained"
        color="otherColor"
     >
         Contained
      </Button>
     <Button
        startIcon={<CurrencyYuanIcon/>}
        variant="outlined"
        color="primary"
       >
        Outlined
      </Button>
      <Typography variant="h5">
        Welcome to MUI
      </Typography>
      <Button variant="contained" sx={{
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
          backgroundColor: 'yellow',
        },
        "&:disabled": {
          backgroundColor: 'red',
        },
      }}>
        Unique Button
      </Button>
      <BlueButton variant="contained">
        Unique Button
      </BlueButton>
    </div>
  );
}

export default App;
