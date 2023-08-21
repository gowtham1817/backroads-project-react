import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks } from '../data'
import { socialLinks } from '../data'
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
          
          <div className="nav-header">
              <img src={logo} className="nav-logo" alt="backroads" />
              <button type="button" className="nav-toggle" id="nav-toggle">
                  <i class="fas fa-bars"></i>
              </button>

          </div>
          <ul className="nav-links" id="nav-links">
             {pageLinks.map((page)=>(
                <li key={page.id}>
                   <a href={page.href} className="nav-link">{page.text}</a>
                </li>
             ))}
          </ul>
          <ul className="nav-icons">
            { socialLinks.map((social)=>(
                  <li key={social.id}>
                     <a href={social.href} target="_blank" rel="noreferrer" className="nav-icon">
                        <i className={social.icon}></i>
                    </a>
                </li>
            ))
            }
             
              
          </ul>

        </div>
    </nav>
  )
}

export default Navbar