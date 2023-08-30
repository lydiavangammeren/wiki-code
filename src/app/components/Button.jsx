import {Grid} from "@mui/material";
import { Button as ButtonDefault}  from "@mui/material";

export default function Button ({ buttonText, bgColor = "black", onClick, disabled, children }) {
    return (
      <ButtonDefault variant="contained"
      disabled={disabled}
      onClick={onClick}
      size="large"
      sx={{
        m: 2,        
        color: "white",
        backgroundColor: `${bgColor}`,
        borderColor: "green",
      }}>
        <Grid container padding={1}>
        {buttonText}
        </Grid>
        {children}
        </ButtonDefault>
    )
  }