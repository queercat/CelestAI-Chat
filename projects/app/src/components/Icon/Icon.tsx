import styled from "@emotion/styled"
import React from "react"

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

const StyledImage = styled("img")(() => ({
  borderRadius: "50%",
  border: "2px solid #000000",
  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
}))

export const Icon: React.FC<IconProps> = ({ src, ...props }) => {
  return <StyledImage {...props} src={src} />
}
