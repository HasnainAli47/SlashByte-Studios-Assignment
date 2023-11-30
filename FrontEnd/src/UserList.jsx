import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { red, blue, grey } from '@mui/material/colors';
import { Fade } from '@mui/material';

function UserList({ users, onDeleteUser }) {
    // Choose color for the role label
    // Each role value will come and of role is admin so blue color will be assigned or grey color
    const getAvatarColor = (role) => {
        switch (role) {
        case 'admin':
            return blue[500];
        case 'user':
            return grey[500];
        default:
            return grey[300];
        }
  };

  return (
    // for some animation with timeout of 500
    <Fade in={true} timeout={500}>
        {/* List of the Users */}
        <List>

            {/* Iterate all of the Users  */}
            {users.map((user, index) => (
                <ListItem key={user.id || index} secondaryAction={
                    <IconButton edge="end" onClick={() => onDeleteUser(user._id)}
                        sx={{ '&:hover': { bgcolor: red[100] } }}>
                        <DeleteIcon sx={{ color: red[600] }} />
                    </IconButton>
                }>
                <ListItemAvatar>
                    {/* Icon for Users */}
                    <Avatar sx={{ bgcolor: getAvatarColor(user.role) }}>
                    <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={
                    <Typography color="text.primary">
                        {/* Display the User Email */}
                    {user.email}
                    </Typography>
                } />
                <Typography sx={{ ml: 2, color: getAvatarColor(user.role) }}>
                    {/* Display the User Role */}
                    {user.role.toUpperCase()}
                </Typography>
                </ListItem>
            ))}
        </List>
    </Fade>
    
  );
}

export default UserList;
