import React from 'react'
import { AppBar, Toolbar, styled, Typography, InputBase, Box, Badge } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },

}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));




const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{ xs:"none", sm:"block" }}}>
        Navbar
        </Typography>
        <PetsIcon sx={{ display: { xs:"block", sm:"none" } }}/>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
       </Badge>
       <Badge badgeContent={2} color="error">
            <Notifications />
       </Badge>
       <Avatar sx={{width:30, height:30 }}/>
        </Icons>
        <UserBox>
        <Avatar sx={{width:30, height:30 }} src=""/>
          <Typography variant="body2">User</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>

  )
}

export default Navbar
