import { Button, Typography } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import CurrencyYuanIcon from '@mui/icons-material/CurrencyYuan';

function App() {
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
        color="success"
     >
         Contained
      </Button>
     <Button
        startIcon={<CurrencyYuanIcon/>}
        variant="outlined"
        color="warning"
       >
        Outlined
      </Button>
      <Typography variant="h5">
        Welcome to MUI
      </Typography>
    </div>
  );
}

export default App;
