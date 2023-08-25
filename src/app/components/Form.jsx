import { Toolbar, Container, Paper, Grid } from "@mui/material";
import Button from "./Button";

export default function Form({toolBarText, children, handleClick}) {
  
  return (
    <>
     <Grid container justifyContent="center">
      <Grid item xs={7}>
      <Paper elevation={3} sx={{ m: 2, p: 4, justifyContent: 'center'}}>
          <Toolbar>
          <h1>{toolBarText}</h1>
          </Toolbar>
          <form>
            {children}
            <Grid container justifyContent="flex-end">
              {handleClick && <Button buttonText="SUBMIT" onClick={handleClick} />}
            {/* <Button onClick={handleClick} buttonText="SUBMIT" /> */}
            </Grid>            
          </form>
        </Paper>
        </Grid>
      </Grid>
    </>
  );
}