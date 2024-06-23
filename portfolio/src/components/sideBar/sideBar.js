import React from 'react'
import './sideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import CSR from '../../Images/csr_icon.jpg'
// import Home from '../../Images/homeIcon.png'
import About from '../../Images/aboutIcon.png'
import Resume from '../../Images/resumeIcon.png'
import Skills from '../../Images/skillsIcon.png'
import Services from '../../Images/servicesIcon.png'
import Contact from '../../Images/contactIcon.png'

const SideBar = () => {
    return (
        <>
            <nav className='sideBarMain'>
                <header className='sideBarHeader'>
                    <div className='sideBarHeaderLogo'>
                        <img src={CSR} className='SideBarCSRIcon' alt='CSR icon' />
                        <div className='sideBarHeaderName'>
                            <p className='sidebarMyName'>Chandu Reddy Vadala</p>
                            <p className='sidebarMyRole'>Web Developer</p>
                        </div>
                    </div>
                    <div className='SideBarMenuIconDiv'>
                        <FontAwesomeIcon className='SideBarMenuIcon' icon={faLessThan} />
                    </div>
                </header>
                <div className='sideBarDiv'>
                    <div className='sideBarDivOne'>
                        <ul className='sideBarDivOneUL'>
                            <li className='sideBarDivOneLI'>
                                <a href='#dashBoard' className='sideBarAnchorIcons'>
                                    {/* <img src={Home} className='SideBarIcon' alt='Home' /> */}
                                    <FontAwesomeIcon className='SideBarIcon' icon={faHouseUser} />
                                    <p className='sideBarIconName'>DashBoard</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#about' className='sideBarAnchorIcons'>
                                    <img src={About} className='SideBarIcon' alt='About' />
                                    <p className='sideBarIconName'>About</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#resume' className='sideBarAnchorIcons'>
                                    <img src={Resume} className='SideBarIcon' alt='Resume' />
                                    <p className='sideBarIconName'>Resume</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#skills' className='sideBarAnchorIcons'>
                                    <img src={Skills} className='SideBarIcon' alt='Skills' />
                                    <p className='sideBarIconName'>Skills</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#services' className='sideBarAnchorIcons'>
                                    <img src={Services} className='SideBarIcon' alt='Services' />
                                    <p className='sideBarIconName'>Services</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#contact' className='sideBarAnchorIcons'>
                                    <img src={Contact} className='SideBarIcon' alt='Contact' />
                                    <p className='sideBarIconName'>Contact</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SideBar
