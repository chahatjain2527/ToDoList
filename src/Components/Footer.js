import React from 'react'

export default function Footer() {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "34.5vh"
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>CopyRight &copy; MyList.com/ C.J.</p>
    </footer>
  )
}
