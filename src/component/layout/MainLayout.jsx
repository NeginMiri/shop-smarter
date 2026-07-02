import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'

const MainLayout = ({children}) => {
  return (
    <>
<Header/>
{children}
<Footer />
    
    </>
  )
}

export default MainLayout;