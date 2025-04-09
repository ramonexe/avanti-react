import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: #f3f3f3;
    
    a {
      text-decoration: none;
    }
  }

  #root {
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ::selection {	
    background: ${props => props.theme.colors.primary};	
    color: ${props => props.theme.colors.text};	
  }
`