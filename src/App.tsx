import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import Container from "./components/Container"
import { GlobalStyles } from "./styles/globals"
import FetchUser from "./components/FetchUser"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <FetchUser />
      </Container>
    </ThemeProvider>
  )

}

export default App
