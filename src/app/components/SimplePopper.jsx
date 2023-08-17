import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Button from '../components/Button'; 
import Popup from "reactjs-popup"; 

export default function SimplePopper({title = "test", buttonText = "testbutton"}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Button buttonText={"Toggle Popper"}aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        <Popup
        trigger={<button className="button">{buttonText}</button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">{title}</div>
            <div className="content">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
              <br />
              <form>
                <label>
                  tag name:
                  <input type="text" />
                </label>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("submit button clicked");
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close
              </button>
            </div>
          </div>
        )}
      </Popup>
        </Box>
      </Popper>
    </div>
  );
}