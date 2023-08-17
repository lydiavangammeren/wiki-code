import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Button from "../components/Button";

export default function ButtonGroup ({ buttonText1, link1, buttonText2, link2 }) {
    return (
        <>
        <Grid container justifyContent="center">
      <span>
        <Link to={link1}>
          <Button buttonText={buttonText1} />
        </Link>
        <Link to={link2}>
          <Button buttonText={buttonText2} />
        </Link>
      </span>
      </Grid>
      </>
    )}