import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

export default function Banner({ title, caption, content }) {
  return (
    <>
      <Grid        
        container 
        minHeight={100}       
        maxHeight={400}
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{
          // m: 2,
          color: "white",
          backgroundColor: "#169db3",
          borderColor: "green",
        }}
      >
        <Grid item xs={12}>
          <Item>{title}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{caption}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{content}</Item>
        </Grid>
      </Grid>
    </>
  );
}
