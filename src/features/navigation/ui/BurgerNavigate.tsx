import React, { useState } from 'react';
import {Drawer, 
IconButton, 
List, 
ListItem, 
ListItemText, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

export const BurgerNavigate: React.FC = (listLink) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon className="text-black" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List className="w-64">
          {listLink.map((item, index) => (
            <ListItem key={index} onClick={toggleDrawer(false)}>
              {/* <Link to={item.url} className="text-black w-full block p-2"> */}
                <ListItemText primary={item.title} />
              {/* </Link> */}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};