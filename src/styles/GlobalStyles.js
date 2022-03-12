import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button, hr {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    margin: 0 auto;
    overflow-x: hidden;
    width: 100%;
  }

  #app {
    overflow-x: hidden;
    min-height: 100vh;
  }
  input{
    border:0px;
  }
  input:focus{
    outline: 0px;
  }
  @media screen and (max-width: 600px) {
  html {
    font-size: 48%;
  }
}
`