import { CssBaseline, ThemeProvider } from "@mui/material"
import React from "react"

import { Header } from "./components/Header/Header.tsx"
import { theme } from "./themes/theme.ts"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}
