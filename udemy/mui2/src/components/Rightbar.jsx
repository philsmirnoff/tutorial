import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';

const Rightbar = () => {
  return (
    <Box
      // bgcolor={'pink'}
      bgcolor={"background.default"} color={"text.primary"}
      flex={2}
      p={2}
      sx={{ display: {xs: "none", sm: 'block'}}}>
     <Box position="fixed" width={300}>
      <Typography variants="h6" fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Ifeoma Achebe" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Max Shortte" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Loreley Giraudon" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
      <Typography variants="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
    <ImageList cols={3} gap={5} rowHeight={100}>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
        alt="Washed Out"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
        alt="Washed Out"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
        alt="Washed Out"
      />
    </ImageListItem>
  </ImageList>
  <Typography variants="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
     </Box>
    </Box>
  )
}

export default Rightbar
