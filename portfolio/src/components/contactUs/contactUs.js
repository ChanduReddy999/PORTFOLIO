import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div id='contact'>
                <div>
                    <div>
                        <h1>Let's get in touch</h1>
                        <p>We're open for any suggestion or just to have a chat</p>
                    </div>
                    <div>
                        <div>
                            <img src='#' alt='location' />
                            <p><span>Address :</span> KPHB 4th Phase, Hyderabad - 500038</p>
                        </div>
                        <div>
                            <img src='#' alt='phone' />
                            <p><span>Phone :</span> +91 93813 17527</p>
                        </div>
                        <div>
                            <img src='#' alt='email' />
                            <p><span>Email :</span> chandureddyvadala1999@gmail.com</p>
                        </div>
                        <div>
                            <img src='#' alt='website' />
                            <p><span>Website :</span> vcsr.com</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href='#' >
                                <img src='#' alt='twitter' />
                            </a>
                        </div>
                        <div>
                            <a href='#' >
                                <img src='#' alt='linkedin' />
                            </a>
                        </div>
                        <div>
                            <a href='#' >
                                <img src='#' alt='facebook' />
                            </a>
                        </div>
                        <div>
                            <a href='#' >
                                <img src='#' alt='instagram' />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>CONTACT</h1>
                    </div>
                    <div>
                        <form>
                            <div>
                                <div>
                                    <label>Full Name</label> <br />
                                    <input type='text' placeholder='Name' />
                                </div>
                                <div>
                                    <label>Email</label> <br />
                                    <input type='email' placeholder='Email' />
                                </div>
                            </div>
                            <div>
                                <label>Subject</label> <br />
                                <input type='text' placeholder='Subject' /> <br />
                                <label>Message</label> <br />
                                <textarea rows={10} cols={40} placeholder='Message'></textarea> <br />
                                <input type='button' value={'Send Message'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
