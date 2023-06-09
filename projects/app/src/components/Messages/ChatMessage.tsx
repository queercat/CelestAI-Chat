import { Box, Card, CardContent, Typography } from "@mui/material"
import React from "react"

import { Message } from "./Messages.tsx"

export const ChatMessage: React.FC<Message> = ({ text, role, ...props }) => {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card sx={{ width: "100%" }} {...props}>
        <CardContent>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
      <Typography
        variant="caption"
        sx={(theme) => ({
          paddingLeft: theme.spacing(2),
          textAlign: role == "User" ? "right" : "left",
        })}
      >
        {role}
      </Typography>
    </Box>
  )
}
