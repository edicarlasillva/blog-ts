import { Router } from "./routes/Router";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./themes/light";
// import dark from "./themes/dark";

export function App() {
  return (
    <ThemeProvider theme={light}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}
