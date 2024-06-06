import React from 'react'
import './services.css'
import checkListIcon from '../../Images/checkListIcon.png'

const Services = () => {
    return (
        <>
            <div id='services' className='servicesMain'>
                <h1 className='servicesH1'>Services</h1>
                <p className='servicesP'>As a fresher in web development, I specialize in creating and integrating web services to provide seamless user experiences</p>
                <div className='serviceContainers'>
                    <div className='servicesSubDiv servicesSubDivCopy'>
                        <div className='servicesSubDivImgDiv1'>
                            <img src={checkListIcon} className='servicesSubDivImg' alt='checkListIcon' />
                        </div>
                        <div className='servicesSubDivDiv2'>
                            <h2 className='servicesSubDivDiv2H2'>Web Development</h2>
                            <p className='servicesSubDivDiv2P'>Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.</p>
                        </div>
                    </div>
                    <div className='servicesSubDiv'>
                        <div className='servicesSubDivImgDiv1'>
                            <img src={checkListIcon} className='servicesSubDivImg' alt='checkListIcon' />
                        </div>
                        <div className='servicesSubDivDiv2'>
                            <h2 className='servicesSubDivDiv2H2'>MERN Stack Development</h2>
                            <p className='servicesSubDivDiv2P'>A MERN stack developer builds and maintains web applications using MongoDB, Express.js, React, and Node.js. They create APIs, develop user interfaces, manage server-side logic, and handle database operations. Proficiency in JavaScript, problem-solving skills, and collaboration with teams are essential, ensuring application security and performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
