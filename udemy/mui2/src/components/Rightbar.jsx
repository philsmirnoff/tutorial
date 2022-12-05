import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Rightbar = () => {
  return (
    <Box
      bgcolor={'pink'}
      flex={2}
      p={2}
      sx={{ display: {xs: "none", sm: 'block'}}}>
     <Box position="fixed">
      <Typography variants="h6" fontWeight={100}>Online Friends</Typography>
     </Box>
    </Box>
  )
}

export default Rightbar
