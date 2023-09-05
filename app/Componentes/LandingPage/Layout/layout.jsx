import React from 'react'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'


const Layout = ({children} ) => {

  return (
    <div>
      <div>
        <Nav/>
      </div>
      {children}
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout;