import styled from "@emotion/styled"
import React from "react"

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

const StyledImage = styled("img")(() => ({
  borderRadius: "50%",
}))

export const Icon: React.FC<IconProps> = ({ src, ...props }) => {
  return <StyledImage {...props} src={src} />
}
