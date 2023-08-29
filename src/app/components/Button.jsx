import { Button as ButtonDefault}  from "@mui/material";

export default function Button ({ buttonText, bgColor = "black", onClick, disabled }) {
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
      }}>{buttonText}</ButtonDefault>
    )
  }