"use client";
import React, { useState } from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar"
import Paper from "@mui/material/Paper"
import ButtonGroup from "../components/ButtonGroup";
import Banner from "../components/Banner";
import {fetchWrapper} from "../helpers/fetch-wrapper";

export default function About() {

  const [authors, setAuthors] = useState([]);

  React.useEffect(() => {
    fetchWrapper.get("http://localhost:8080/author/getAll").then(data => {
  setAuthors(data)  
 })}, []);

  return (
    <>
      <Banner title={"ABOUT"} />
      <Paper sx={{m: 2, p: 2}}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
        nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis
        magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.
        Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales
        nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam
        odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at
        ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare
        accumsan, blandit sed diam.
      </p>
      </Paper>
      
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <h1>Authors</h1>
          <List>
            {authors.map((author, index) => {
              return <ListItem1 key={index} name={author.authorName} />;
            })}
          </List>
        </nav>
      </Box>
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"CONTACT"}
        link2={"/contact"}
      />
    </>
  );
}


function ListItem1({ name }) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <Avatar alt="user avatar" src="/images/user.png" />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
