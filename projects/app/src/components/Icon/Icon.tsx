import { styled } from "@mui/material"
import React from "react"

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  border: `4px solid ${theme.palette.mode == "dark" ? "#eee" : "#000"}`,
  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "rotate(45deg)",
  },
}))

export const Icon: React.FC<IconProps> = ({ src, ...props }) => {
  return <StyledImage {...props} src={src} />
}
