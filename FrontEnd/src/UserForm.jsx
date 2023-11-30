import React, { useState } from 'react';
import { Button, TextField, Modal, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// Styling for modal box
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

// Handle the form fields
function UserForm({ onAddUser }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

//   Open and Close the form
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

// Handle filling of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddUser({ name, email, role });
    setName('');
    setEmail('');
    setRole('');
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>Add User</Button>
      {/* Deinfe Model */}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
            {/* Add heading of the modal */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new user
          </Typography>
          {/* Start form and ask for fields */}
          <form onSubmit={handleSubmit}>
            {/* Name of the User */}
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
            />
            {/* Email of the User */}
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                fullWidth
            />
            {/* Role of the User */}
            <FormControl fullWidth margin="normal">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                value={role}
                label="Role"
                onChange={(e) => setRole(e.target.value)}
                required
                >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </form>
        </Box>
      </Modal>
    </>
  );
}

export default UserForm;
