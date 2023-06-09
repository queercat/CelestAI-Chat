import { HistoryEduOutlined } from "@mui/icons-material"
import {
  Box,
  IconButton,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material"
import React from "react"

type ChatInputProps = {
  text: string
  setText: (text: string) => void
  handleSendClick: () => void
} & TextFieldProps

const InputContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  padding: theme.spacing(2),
}))

const CenterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: theme.spacing(1),
}))

export const ChatInput: React.FC<ChatInputProps> = ({
  text,
  setText,
  handleSendClick,
  ...props
}) => {
  return (
    <InputContainer>
      <CenterContent>
        <TextField
          {...props}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Dear Princess CelestAI..."
          sx={{ width: "100%" }}
        />
        <IconButton onClick={handleSendClick}>
          <HistoryEduOutlined sx={{ fontSize: "3rem" }} />
        </IconButton>
      </CenterContent>
    </InputContainer>
  )
}
