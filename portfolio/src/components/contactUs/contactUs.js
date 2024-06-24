import React, { useState } from 'react'
import Axios from 'axios'
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

    const url = "https://firebase-uiab.onrender.com/prod/v1/contactus"
    const [data, setData]=useState({
        FullName:'',
        Email:'',
        Subject:'',
        Message:''
    })

    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
    }

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            FullName:data.FullName,
            Email:data.Email,
            Subject:data.Subject,
            Message:data.Message
        })
        .then(res=>{
            console.log(res.data);
        })
    }

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
                            <p className='contactDetails1SubDiv2Para'><span className='contactDetailsSpan'>Address :</span> KPHB 4th Phase, Hyderabad - 500038</p>
                        </div>
                        <div className='contactDetails1SubDiv2Phone iconsmatter'>
                            <img src={phone} alt='phone' className='logoDimensions' />
                            <p className='contactDetails1SubDiv2Para'><span className='contactDetailsSpan'>Phone :</span> <a href='tel:+919381317527' className='mobileNumber'>+91 93813 17527</a> </p>
                        </div>
                        <div className='contactDetails1SubDiv2Email iconsmatter'>
                            <img src={email} alt='email' className='logoDimensions' />
                            <p className='contactDetails1SubDiv2Para'><span className='contactDetailsSpan'>Email :</span> <a href='mailto:chandureddyvadala1999@gmail.com' className='EmailID'>chandureddyvadala1999@gmail.com</a> </p>
                        </div>
                        <div className='contactDetails1SubDiv2Website iconsmatter'>
                            <img src={website} alt='website' className='logoDimensions' />
                            <p className='contactDetails1SubDiv2Para'><span className='contactDetailsSpan'>Website :</span> <a href='https://chandureddyvadala.netlify.app/' className='myWebsite'>Portfolio</a> </p>
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
                        <form onSubmit={(e)=>submit(e)}>
                            <div className='contactData1'>
                                <div className='contactData1Div1'>
                                    <label htmlFor='FullName' className='contactFullNameLabel'>Full Name</label> <br />
                                    <input type='text' onChange={(e)=>handle(e)} id='FullName' value={data.FullName} placeholder='Name' className='contactFullNameInput' required />
                                </div>
                                <div className='contactData1Div2'>
                                    <label htmlFor='Email' className='contactEmailLabel'>Email</label> <br />
                                    <input type='email' onChange={(e)=>handle(e)} id='Email' value={data.Email} placeholder='Email' className='contactEmailInput' required />
                                </div>
                            </div>
                            <div className='contactData2'>
                                <label htmlFor='Subject' className='contactSubjectLabel'>Subject</label> <br />
                                <input type='text' onChange={(e)=>handle(e)} id='Subject' value={data.Subject} placeholder='Subject' className='contactSubjectInput' required /> <br />
                                <label htmlFor='Message' className='contactMessageLabel'>Message</label> <br />
                                <textarea rows={10} cols={40} onChange={(e)=>handle(e)} id='Message' value={data.Message} placeholder='Message' className='contactMessageTextarea' required></textarea> <br />
                                {/* <input type='button' value={'Send Message'} className='contactSendButton' /> */}
                                <button className='contactSendButton'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
