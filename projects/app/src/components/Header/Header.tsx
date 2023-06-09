import { Box, styled, Typography } from "@mui/material"
import React from "react"

import CelestiaImage from "../../images/RalekArts-puppet.png"
import { Icon } from "../Icon/Icon.tsx"

interface HeaderProps {}

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  whiteSpace: "nowrap",
}))

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <StyledContainer {...props}>
      <Typography variant="h2">
        Celest<b>AI</b> Chat
      </Typography>
      <Icon src={CelestiaImage} width={100} />
    </StyledContainer>
  )
}
