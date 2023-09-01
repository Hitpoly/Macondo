import React from 'react'
import Header from './Componentes/Header/Header'
import Section1 from './Componentes/Sections/section1' 
import Section2 from './Componentes/Sections/section2' 
import Section3 from './Componentes/Sections/section3'
import Footer from './Componentes/Footer/Footer'
import { useRef } from 'react';


  


const Page = () => {

  const url = location.href;


  return (
    <div>
         You are currently accessing <b>{url}</b>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  )
}

export default Page;