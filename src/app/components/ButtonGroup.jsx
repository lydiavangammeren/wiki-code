import Link from 'next/link';
import { Grid } from "@mui/material";
import Button from "../components/Button";

export default function ButtonGroup ({ buttonText1, link1, buttonText2, link2 }) {
    return (
        <>
        <Grid container justifyContent="center">
      <span>
      <Link href={link1}>
          <Button buttonText={buttonText1} />
        </Link>
        <Link href={link2}>
          <Button buttonText={buttonText2} />
        </Link>
      </span>
      </Grid>
      </>
    )}