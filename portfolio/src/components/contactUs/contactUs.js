import React from 'react'
import './contactUs.css'
import location from '../../Images/locationLogo.png'
import phone from '../../Images/phoneLogo.png'
import email from '../../Images/emailLogo.png'
import website from '../../Images/websiteLogo.png'
import twitter from '../../Images/twitterLogo.png'
import linkedin from '../../Images/linkedinLogo.png'
import facebook from '../../Images/facebookLogo.png'
import instagram from '../../Images/instagramLogo.png'

const ContactUs = () => {
    return (
        <>
            <div id='contact' className='contactPage'>
                <div className='contactDetails1'>
                    <div className='contactDetails1SubDiv'>
                        <h1 className='contactDetails1SubDivHeading'>Let's get in touch</h1>
                        <p className='contactDetails1SubDivPara'>We're open for any suggestion or just to have a chat</p>
                    </div>
                    <div className='contactDetails1SubDiv2'>
                        <div className='contactDetails1SubDiv2Location iconsmatter'>
                            <img src={location} alt='location' className='logoDimensions' />
                            <p><span className='contactDetailsSpan'>Address :</span> KPHB 4th Phase, Hyderabad - 500038</p>
                        </div>
                        <div className='contactDetails1SubDiv2Phone iconsmatter'>
                            <img src={phone} alt='phone' className='logoDimensions' />
                            <p><span className='contactDetailsSpan'>Phone :</span> +91 93813 17527</p>
                        </div>
                        <div className='contactDetails1SubDiv2Email iconsmatter'>
                            <img src={email} alt='email' className='logoDimensions' />
                            <p><span className='contactDetailsSpan'>Email :</span> chandureddyvadala1999@gmail.com</p>
                        </div>
                        <div className='contactDetails1SubDiv2Website iconsmatter'>
                            <img src={website} alt='website' className='logoDimensions' />
                            <p><span className='contactDetailsSpan'>Website :</span> <a href='https://portfolio-chandureddy.netlify.app/'>Portfolio</a> </p>
                        </div>
                    </div>
                    <div className='contactDetails1SubDiv3'>
                        <div>
                            <a href='https://twitter.com/ChanduVadala?t=dM2K7zpb658i5t_aMMltAA&s=08' >
                                <img src={twitter} alt='twitter' className='logoDimensions' />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/chandra-shekar-reddy-vadala' >
                                <img src={linkedin} alt='linkedin' className='logoDimensions' />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.facebook.com/vadala.c.reddy' >
                                <img src={facebook} alt='facebook' className='logoDimensions' />
                            </a>
                        </div>
                        <div>
                            <a href='https://instagram.com/vadalachandureddy' >
                                <img src={instagram} alt='instagram' className='logoDimensions' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contactDetails2'>
                    <div className='contactDetails2SubDiv'>
                        <h1 className='contactDetails2SubDivHeading'>Contact Us</h1>
                    </div>
                    <div className='contactDetails2SubDiv2'>
                        <form>
                            <div className='contactData1'>
                                <div className='contactData1Div1'>
                                    <label className='contactFullNameLabel'>Full Name</label> <br />
                                    <input type='text' placeholder='Name' className='contactFullNameInput' />
                                </div>
                                <div className='contactData1Div2'>
                                    <label className='contactEmailLabel'>Email</label> <br />
                                    <input type='email' placeholder='Email' className='contactEmailInput' />
                                </div>
                            </div>
                            <div className='contactData2'>
                                <label className='contactSubjectLabel'>Subject</label> <br />
                                <input type='text' placeholder='Subject' className='contactSubjectInput' /> <br />
                                <label className='contactMessageLabel'>Message</label> <br />
                                <textarea rows={10} cols={40} placeholder='Message' className='contactMessageTextarea'></textarea> <br />
                                <input type='button' value={'Send Message'} className='contactSendButton' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
