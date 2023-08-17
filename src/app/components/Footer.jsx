import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CodeIcon from "@mui/icons-material/Code";

export default function Footer() {
  return (
    <>
      <CodeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
          Wiki Code
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}
