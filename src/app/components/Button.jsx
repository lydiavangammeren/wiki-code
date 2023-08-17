import { Button as ButtonDefault}  from "@mui/material";

export default function Button ({ buttonText, bgColor = "black", onClick }) {
    return (
      <ButtonDefault variant="contained"
      onClick={onClick}
      size="large"
      sx={{
        m: 2,
        color: "white",
        backgroundColor: `${bgColor}`,
        borderColor: "green",
      }}>{buttonText}</ButtonDefault>
    )
  }