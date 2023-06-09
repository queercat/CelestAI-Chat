import { Box, CssBaseline, styled, ThemeProvider } from "@mui/material"
import React, { useState } from "react"

import { ChatInput } from "./components/ChatInput/ChatInput.tsx"
import { Header } from "./components/Header/Header.tsx"
import { Message, Messages } from "./components/Messages/Messages.tsx"
import { darkTheme, lightTheme } from "./themes/theme.ts"

const StyledContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}))

export const App: React.FC = () => {
  const [chatInput, setChatInput] = useState("")
  const [messages, setMessages] = useState<Message[]>()
  const [isLoading, setIsLoading] = useState(false)
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  var theme = lightTheme
  if (prefersDark) {
    theme = darkTheme
  }

  const handleSubmit = async (prompt: string) => {
    const message: Message = {
      role: "User",
      text: prompt,
    }
    setMessages((messages) => [...(messages ?? []), message])
    setIsLoading(true)
    setChatInput("")
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer>
        <Header />
        <Messages messages={messages} isLoading={isLoading} />
        <ChatInput
          variant="outlined"
          text={chatInput}
          setText={setChatInput}
          isLoading={isLoading}
          handleOnSubmit={() => {
            handleSubmit(chatInput)
          }}
        />
      </StyledContainer>
    </ThemeProvider>
  )
}
