import { Box, CssBaseline, styled, ThemeProvider } from "@mui/material"
import React, { useState } from "react"

import { ChatInput } from "./components/ChatInput/ChatInput.tsx"
import { Header } from "./components/Header/Header.tsx"
import { darkTheme, lightTheme } from "./themes/theme.ts"

const StyledContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}))

export const App: React.FC = () => {
  const [chatInput, setChatInput] = useState("")
  var theme = lightTheme

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (prefersDark) {
    theme = darkTheme
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer>
        <Header />
        <ChatInput
          variant="outlined"
          text={chatInput}
          setText={setChatInput}
          handleSendClick={() => {}}
        />
      </StyledContainer>
    </ThemeProvider>
  )
}
