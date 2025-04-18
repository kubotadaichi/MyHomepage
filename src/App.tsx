import './App.css'
import { useEffect } from 'react';


import Header from './components/Header'
import { Dock } from 'primereact/dock';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // テーマ
import 'primereact/resources/primereact.min.css'; // コア
import 'primeicons/primeicons.css'; // アイコン
import 'primeflex/primeflex.css'; // PrimeFlex（オプション）

// import React, { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';

// import ButtonDemo from './components/ButtonDemo';
// import DialogDemo from './components/DialogDemo';
// import FormDemo from './components/FormDemo';
import Top from './components/Top';
import Prolog from './components/Prolog';

import TerminalDemo from './components/TerminalDemo';
import SiteMap from './components/SiteMap';
import Introduce from './components/Intoroduce';

import Stickies from './components/Stickies';



function App() {

  const colors = [
    ["#003d99","#ffffff"],
    ["#4FA184","#722711"],
    ["#ffcc00","#000000"],
  ]

  useEffect(() => {
    const handleScroll = () => {
      const userPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (userPosition === 0) {
        console.log("Reached the top of the page");
      }

      if (userPosition >= windowHeight) {
        console.log("Reached the middle of the page");
      }

      if (userPosition + windowHeight >= documentHeight) {
        console.log("Reached the bottom of the page");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (

    <div className="App">

      <div className='flex flex-col m-0 p-0'>
        
        <Top bgColor={colors[0][0]} textColor={colors[0][1]} />

        <div className="grid grid-cols-2 place-content-center gap-1 h-dvh m-0" style={{ backgroundColor: colors[1][0] }}>
          {/* <SiteMap /> */}
          <Introduce />

        </div>
      
        <div className="grid place-content-center h-dvh m-0" style={{ backgroundColor: colors[2][0] }}>
            <Prolog />
        </div>
      
      </div>
    </div>
  )
}

export default App
