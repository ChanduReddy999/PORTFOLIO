import React from 'react'
import MyPic from '../../Images/Chandu_Sir.png'

const PersonalInfo = () => {
    return (
        <>
            <div id='about'>
                <div className=''>
                    <h1>Web Developer</h1>
                </div>
                <div className=''>
                    <div className=''>
                        <img src={MyPic} alt='My_Picture' />
                    </div>
                    <div className=''>
                        <ul>
                            <div>
                                <li><span>BirthDay</span>29 July 1999</li>
                                <li><span>Phone</span>+91 93813 17527</li>
                                <li><span>City</span>KPHB 4th Phase, Hyderabad</li>
                            </div>
                            <div>
                                <li><span>Age</span>24</li>
                                <li><span>Degree</span>Bachelor of Technology</li>
                                <li><span>Email</span>chandureddyvadala1999@gmail.com</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h2>About</h2>
                    <p>I'm Chandra Shekar Reddy Vadala, a Computer Science Engineering graduate from Holy Mary Institute of Technology and Science in Telangana. As a full-stack web developer, I specialize in Python and have proficiency in HTML, CSS, JavaScript, MySQL, MSSQL, Django, ReactJS, Node.js and Express.js. My passion lies in crafting robust web applications. I aspire to take on the role of a Python Developer, using my skills to create innovative solutions. I'm committed to lifelong learning and eager to collaborate on exciting projects. Let's connect and explore opportunities in the dynamic world of technology.</p>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo
