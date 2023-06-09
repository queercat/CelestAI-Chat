import { Box } from "@mui/material"
import React from "react"

import { ChatMessage } from "./ChatMessage.tsx"

export interface Message {
  role: "User" | "CelestAI"
  text: string
}

interface MessagesProps {
  messages?: Message[]
  isLoading?: boolean
}

export const Messages: React.FC<MessagesProps> = ({
  messages,
  // eslint-disable-next-line no-unused-vars
  isLoading,
}) => {
  return (
    <>
      {messages?.map((message, index) => (
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent:
              message.role == "CelestAI" ? "flex-start" : "flex-end",
            padding: theme.spacing(2),
          })}
          key={index}
        >
          <ChatMessage text={message.text} role={message.role} />
        </Box>
      ))}
    </>
  )
}
