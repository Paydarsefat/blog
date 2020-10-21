import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      <a href="https://wwww.instagram.com/paydarsefat/">@paydarsefat</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="http://paydarsefat.ir">paydarsefat</a>.
        </span>
      </div>
    </footer>
  </div>
)
