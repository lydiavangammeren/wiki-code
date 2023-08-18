import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ButtonGroup from "../components/ButtonGroup";
import Banner from "../components/Banner";

export default function About() {
  return (
    <>
      <Banner title={"ABOUT"} />
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
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {contributors.map((contributor, index) => {
              return <ListItem1 key={index} name={contributor}/>;
            })}
          </List>
        </nav>
      </Box>
      {/* <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box> */}
      <ButtonGroup
        buttonText1={"HOME"}
        link1={"/"}
        buttonText2={"CONTACT"}
        link2={"/contact"}
      />
    </>
  );
}

const contributors = [
  "Author 1",
  "Author 1",
  "Author 3",
  "Author 4",
  "Author 5",
];

function ListItem1({name}) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
