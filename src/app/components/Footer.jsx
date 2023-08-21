import {Container} from "@mui/material"
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CodeIcon from "@mui/icons-material/Code";

export default function Footer() {
  
  return (
    <Container container sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
      <CodeIcon/>
      <Typography variant="body2" color="text.secondary">
        <span>{"Copyright"} &copy;  </span>
        <Link color="inherit" href="/">
            Wiki Code
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
