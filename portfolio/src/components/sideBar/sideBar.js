import React from 'react'
import './sideBar.css'
import CSR from '../../Images/csr_icon.jpg'
import Menu from '../../Images/menuIcon.jpeg'
import Home from '../../Images/homeIcon.png'
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
                            <p>Chandra Shekar Reddy Vadala</p>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className='SideBarMenuIconDiv'>
                        <img src={Menu} className='SideBarMenuIcon' alt='> icon' />
                    </div>
                </header>
                <div className='sideBarDiv'>
                    <div className='sideBarDivOne'>
                        <ul className='sideBarDivOneUL'>
                            <li className='sideBarDivOneLI'>
                                <a href='#dashBoard' className='sideBarAnchorIcons'>
                                    <img src={Home} className='SideBarHomeIcon' alt='Home' />
                                    <p>DashBoard</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#about' className='sideBarAnchorIcons'>
                                    <img src={About} className='SideBarAboutIcon' alt='About' />
                                    <p>About</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#resume' className='sideBarAnchorIcons'>
                                    <img src={Resume} className='SideBarResumeIcon' alt='Resume' />
                                    <p>Resume</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#skills' className='sideBarAnchorIcons'>
                                    <img src={Skills} className='SideBarSkillsIcon' alt='Skills' />
                                    <p>Skills</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#services' className='sideBarAnchorIcons'>
                                    <img src={Services} className='SideBarServicesIcon' alt='Services' />
                                    <p>Services</p>
                                </a>
                            </li>
                            <li className='sideBarDivOneLI'>
                                <a href='#contact' className='sideBarAnchorIcons'>
                                    <img src={Contact} className='SideBarContactIcon' alt='Contact' />
                                    <p>Contact</p>
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
