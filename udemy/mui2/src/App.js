import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
   </Box>
    </ThemeProvider>
  );
}

export default App;
