import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import Container from "./components/Container"
import { GlobalStyles } from "./styles/globals"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <p>Olá</p>
      </Container>
    </ThemeProvider>
  )
  
}

export default App
