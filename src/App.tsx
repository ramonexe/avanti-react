import styled, { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import Container from "./components/Container"
import { GlobalStyles } from "./styles/globals"
import FetchUser from "./components/FetchUser"
import Camada1 from "./assets/Camada_1.svg";
import Ellipse1 from "./assets/Ellipse_1.svg";
import Ellipse2 from "./assets/Ellipse_2.svg";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #1F1F1F;
  overflow: hidden;

  .layer1 {
    position: absolute;
    top: 10%;
    left: 15%;
    width: 300px;
    height: auto;
    opacity: 0.8;
  }

  .ellipse2 {
    position: absolute;
    top: 0;
    left: 0%;
    width: 500px;
    height: auto;
    opacity: 0.6;
  }

  .ellipse1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 700px;
    height: auto;
    opacity: 0.7;
  }
`;

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BackgroundContainer>
        <Container>
          <FetchUser />
        </Container>
        <img src={Camada1} alt="Camada 1" className="layer1" />
        <img src={Ellipse1} alt="Ellipse 1" className="ellipse1" />
        <img src={Ellipse2} alt="Ellipse 2" className="ellipse2" />
      </BackgroundContainer>
    </ThemeProvider>
  )

}

export default App
