import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;

    a {
      text-decoration: none;
    }
  }

  #root {
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ::selection {	
    background: ${props => props.theme.colors.primary};	
    color: ${props => props.theme.colors.text};	
  }
`