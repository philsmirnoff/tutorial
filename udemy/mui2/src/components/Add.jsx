import React from 'react';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { Add as AddIcon } from '@mui/icons-material';
import { Button, Modal, Typography, styled } from '@mui/material';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { EmojiEmotions } from '@mui/icons-material';
import { Image } from '@mui/icons-material';
import { VideoCameraBack } from '@mui/icons-material';
import { PersonAdd } from '@mui/icons-material';
import { ButtonGroup } from '@mui/material';
import { DateRange } from '@mui/icons-material';




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

// const ButtonGroupp = styled(ButtonGroup)({
//   display: "flex",
//   width: "100%",
//   marginBottom: "20px"
// });


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
     <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
        <Typography variant="h6" color="gray" textAlign="center" fontWeight={400}>Create a Post</Typography>
        <UserBox>
          <Avatar src="/static/images/avatar/1.jpg"
          sx={{ width: 30, height: 30 }} />
              <Typography fontWeight={500} variant="span">John Doe</Typography>
        </UserBox>
   <TextField
      sx={{width: "100%"}}
      id="standard-multiline-static"
      multiline
      rows={3}
      placeholder="Whats on your mind?"
      variant="standard"
    />
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{mt: 2}} gap={1} mb={3}>
      <EmojiEmotions color="primary" />
          <Image color="secondary" />
          <VideoCameraBack color="success" />
          <PersonAdd color="error" />
    </Stack>
    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
      <Button color="primary">Post</Button>
      <Button sx={{ width: "100px" }}>
        <DateRange />
      </Button>
    </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add
