import './App.css'

import React from 'react'

import { MenuList, MenuListItem, Separator, styleReset, Monitor, Hourglass, Button } from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import AppBar_ from './components/AppBar'
import Footer from './components/Footer'

import original from 'react95/dist/themes/original'
// import rainyDay from 'react95/dist/themes/rainyDay'

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
    // background-color : #038080;
    // background-image: url('cat.gif');

  }
`;

function App() {

  const [toggle, setToggle] = React.useState(false);

  return (
    <div >

    
    <GlobalStyles />


    <ThemeProvider theme={original}>
    {/* <ThemeProvider theme={rainyDay}> */}
      <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
      </MenuList>
      <Monitor backgroundStyles={{ 
        backgroundColor: "blue",
        // backgroundImage: `url("actress.gif")`,
        backgroundImage: toggle ? `` : `url("actress.gif")`,
        backgroundSize: "cover",
      }}/>
      <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
      <Hourglass />
    </ThemeProvider>
    
      {/* <AppBar_ /> */}
      <Footer />

  </div>
  )
}

export default App
