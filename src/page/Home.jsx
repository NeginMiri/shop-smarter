import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from '../component/header'
import MainLayout from '../component/layout/MainLayout'
import Hero from '../component/UI/Hero'
import Latest from '../component/UI/Latest'
import BestSelling from '../component/UI/BestSelling'
import OurSpecifications from '../component/UI/OurSpecifications'
import Join from '../component/UI/Join'


function Home () {
  

  return (
  <MainLayout>
    <Hero />
    <Animation />
    <Latest /> 
    <BestSelling />
    <OurSpecifications />
    <Join />
  </MainLayout>
  )
}

export default App
