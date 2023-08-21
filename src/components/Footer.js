import React from 'react'
import { pageLinks,socialLinks } from '../data'
const Footer = () => {
  return (
    <footer class="section footer">
        <ul class="footer-links">
            {pageLinks.map((page)=>(
                <li key={page.id}>
                   <a href={page.href} class="footer-link">{page.text}</a>
                </li>

            ))}
          
        </ul>
        <ul class="footer-icons">
            {socialLinks.map((social)=>(
                 <li key={social.id}>
                   <a href={social.href} target="_blank" rel="noreferrer" class="footer-icon">
                         <i class={social.icon}></i>
                   </a>
                 </li>
            ))
            }
            
           
        </ul>
        <p class="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
    </footer>
  )
}

export default Footer