import React from 'react'
import './footer.css'

const Footer = () => {
  const PresentYear = new Date().getFullYear()
  return (
    <>
      <div className='footerDiv'>
        <p className='footerP1'>&#169;{PresentYear} | All Rights Reserved</p>
        <p className='footerP2'>Designed by <span className='footerP2Span'>Chandu Reddy Vadala</span></p>
      </div>
    </>
  )
}

export default Footer
