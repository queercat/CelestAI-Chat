import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
  palette: {
    text: {
      primary: "#494949",
    },
    background: {
      paper: "#EBEBEB",
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})
