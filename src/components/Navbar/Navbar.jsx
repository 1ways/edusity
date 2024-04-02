import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenuHandle = () => {
    if (!mobileMenu) {
      setMobileMenu(true)
    } else {
      setMobileMenu(false)
    }
  }

  return (
    <nav className={`nav container ${sticky ? 'dark-nav' : ''}`}>
      <a href='#'>
        <img className='logo' src={logo} alt='logo' />
      </a>
      <ul
        className={`nav__list ${
          mobileMenu ? 'hide-mobile-menu' : ''
        }`}
      >
        <li className='nav__list-item nav__list-item-link'>
          <Link to='hero' smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className='nav__list-item nav__list-item-link'>
          <Link to='program' smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li className='nav__list-item nav__list-item-link'>
          <Link to='about' smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li className='nav__list-item nav__list-item-link'>
          <Link to='campus' smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li className='nav__list-item nav__list-item-link'>
          <Link to='testimonials' smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className='nav__list-item'>
          <button className='btn navbar-btn'>
            <Link to='contact' smooth={true} offset={-250} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <button className='menu-btn' onClick={toggleMenuHandle}>
        <img className='menu-icon' src={menu_icon} alt='menu-icon' />
      </button>
    </nav>
  )
}

export default Navbar
