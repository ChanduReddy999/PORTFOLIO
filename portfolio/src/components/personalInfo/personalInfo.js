import React from 'react'
import MyPic from '../../Images/Chandu_Sir.png'
import './personalInfo.css'

const PersonalInfo = () => {
    return (
        <>
            <div id='about' className='aboutPage'>
                <div className='aboutTitle'>
                    <h1>Web Developer</h1>
                </div>
                <div className='aboutPageDiv'>
                    <div className='aboutPictureDiv'>
                        <img src={MyPic} className='aboutPicture' alt='My_Picture' />
                    </div>
                    <div className=''>
                        <ul className='aboutPersonalInfo'>
                            <div className='aboutPersonalInfoDiv'>
                                <li className='personalInfoLI'><span className='personalInfoHeadings'>BirthDay : </span>29 July 1999</li>
                                <li className='personalInfoLI'><span className='personalInfoHeadings'>Phone : </span><a href='tel:+919381317527' className='mobileNumber'>+91 93813 17527</a></li>
                                <li className='personalInfoLI'><span className='personalInfoHeadings'>City : </span>KPHB 4th Phase, Hyderabad</li>
                            </div>
                            <div className='aboutPersonalInfoDiv'>
                                <li className='personalInfoLI'><span className='personalInfoHeadings'>Age : </span>24</li>
                                <li className='personalInfoLI'><span className='personalInfoHeadings'>Degree : </span>Bachelor of Technology</li>
                                <li className='personalInfoLI'><span className='personalInfoHeadings'>Email : </span><a href='mailto:chandureddyvadala1999@gmail.com' className='EmailID'>chandureddyvadala1999@gmail.com</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='personalInfoAbout'>
                    <h2 className='personalInfoAboutH2'>About</h2>
                    <p className='personalInfoAboutP'>I'm Chandra Shekar Reddy Vadala, a Computer Science Engineering graduate from Holy Mary Institute of Technology and Science in Telangana. As a full-stack web developer, I specialize in Python and have proficiency in HTML, CSS, JavaScript, MySQL, MSSQL, Django, ReactJS, Node.js and Express.js. My passion lies in crafting robust web applications. I aspire to take on the role of a Python Developer, using my skills to create innovative solutions. I'm committed to lifelong learning and eager to collaborate on exciting projects. Let's connect and explore opportunities in the dynamic world of technology.</p>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo
