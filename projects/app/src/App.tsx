import { CssBaseline, ThemeProvider } from "@mui/material"
import React from "react"

import { Icon } from "./components/Icon/Icon.tsx"
import CelestiaImage from "./images/RalekArts-puppet.png"
import { theme } from "./themes/theme.ts"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Icon src={CelestiaImage} width={100} />
    </ThemeProvider>
  )
}
