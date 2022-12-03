import React from 'react';
import Box from '@mui/material/Box';

const Sidebar = () => {
  return (
    <Box
       bgcolor={'orange'}
       flex={1}
       p={2}
       sx={{ display: {xs: "none", sm: 'block'}}}
       >
        Sidebar
      </Box>
  )
}

export default Sidebar
