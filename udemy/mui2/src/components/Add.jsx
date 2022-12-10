import React from 'react';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { Add as AddIcon } from '@mui/icons-material';
import { Button, Modal, Typography, styled } from '@mui/material';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';


const StyledModal = styled(Modal)({
 display: "flex",
  alignItems: "center",
  justifyContent: "center",
});


const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"10px",
  marginBottom: "20px"
});

const Add = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip onClick={e => setOpen(true)}
      title="Delete" sx={{position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30}}}>
        <Fab color="primary" aria-label="add">
         <AddIcon />
         </ Fab>
       </Tooltip>
     <StyledModal
      open={open}
      onClose={e => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
     <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
        <Typography variant="h6" color="gray" textAlign="center" fontWeight={400}>Create a Post</Typography>
        <UserBox>
          <Avatar src="/static/images/avatar/1.jpg"
          sx={{ width: 30, height: 30 }} />
        </UserBox>
        <Typography fontWeight={500} variant="span">John Doe</Typography>
  </Box>
</StyledModal>
    </>
  )
}

export default Add
