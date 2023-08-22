"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import CodeIcon from "@mui/icons-material/Code";
import Button from '../components/Button';

const tags = ['Java', 'Spring Boot'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add a new tag</DialogTitle>
      <List sx={{ pt: 0 }}>
        {tags.map((tag, index) => (
          <ListItem key={index} disableGutters>
            <ListItemButton onClick={() => handleListItemClick(tag)} key={tag}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <CodeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={tag} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addTag')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add a tag" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(tags[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button buttonText={"Add a new tag"} variant="outlined" onClick={handleClickOpen}/>      
           <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}