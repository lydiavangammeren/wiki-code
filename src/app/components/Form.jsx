import { Toolbar, Container, Paper, Grid } from "@mui/material";
import Button from "./Button";

export default function Form({toolBarText, children}) {
  
  return (
    <>
     <Grid container justifyContent="center">
      <Grid xs={7}>
      <Paper elevation={3} sx={{ m: 2, p: 4, justifyContent: 'center'}}>
          <Toolbar>
          <h1>{toolBarText}</h1>
          </Toolbar>
          <form>
            {children}
            <Grid container justifyContent="flex-end">
            <Button buttonText="SUBMIT" />
            </Grid>            
          </form>
        </Paper>
        </Grid>
      </Grid>
    </>
  );
}