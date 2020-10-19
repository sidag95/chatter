import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Head } from "./components/Head/Head";
import { ApiController } from "./components/Api/ApiController";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head />
      <ApiController>
        <HomeScreen />
      </ApiController>
    </ThemeProvider>
  );
}

export default App;
