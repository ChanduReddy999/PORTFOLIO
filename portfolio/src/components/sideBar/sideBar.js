import React from 'react'

const SideBar = () => {
    return (
        <>
            <nav>
                <header>
                    <div>
                        <img src='#' alt='V icon' />
                        <div>
                            <p>Chandra Shekar Reddy Vadala</p>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div>
                        <img src="#" alt='> icon' />
                    </div>
                </header>
                <div>
                    <div>
                        <ul>
                            <li>
                                <a href='#dashBoard'>
                                    <img src='#' alt='' />
                                    <p>DashBoard</p>
                                </a>
                            </li>
                            <li>
                                <a href='#about'>
                                    <img src='#' alt='' />
                                    <p>About</p>
                                </a>
                            </li>
                            <li>
                                <a href='#resume'>
                                    <img src='#' alt='' />
                                    <p>Resume</p>
                                </a>
                            </li>
                            <li>
                                <a href='#skills'>
                                    <img src='#' alt='' />
                                    <p>Skills</p>
                                </a>
                            </li>
                            <li>
                                <a href='#services'>
                                    <img src='#' alt='' />
                                    <p>Services</p>
                                </a>
                            </li>
                            <li>
                                <a href='#contact'>
                                    <img src='#' alt='' />
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
