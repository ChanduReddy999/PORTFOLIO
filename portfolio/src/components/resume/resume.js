import React from 'react'
import './resume.css'

const Resume = () => {
    return (
        <>
            <div id='resume' className='resumeMain'>
                <div className='resumeMain1'>
                    <h1 className='resumeMain1Heading'>Resume</h1>
                    <p className='resumeMain1Para'>A hard working and self-motivated student with proven leadership and organizational skills seeking a position of Full Stack Developer to utilize my technical and management skills for the growth of the organization as well as to enhance my knowledge.</p>
                </div>
                <div className='resumeMain2'>
                    <h1 className='resumeMain2Heading'>Education</h1>
                    <div className='education'>
                        <div className='education14'>
                            <h2>BACHELOR OF TECHNOLOGY</h2>
                            <div>
                                <div>
                                    <p>2018 - 2022</p>
                                </div>
                                <div>
                                    <p>CGPA : 6.6</p>
                                </div>
                                <p>Computer Science Engineering</p>
                                <p>Holy Mary Institute of Technology and Science, Keesara</p>
                            </div>
                        </div>
                        <div className='education10'>
                            <h2>SSC (TS)</h2>
                            <div>
                                <div>
                                    <p>2015 - 2016</p>
                                </div>
                                <div>
                                    <p>CGPA : 9.5</p>
                                </div>
                                <p>New Little Roses High School, Palem</p>
                            </div>
                        </div>
                    </div>
                    <div className='education12'>
                        <h2>BOARD OF INTERMEDIATE EDUCATION (TS)</h2>
                        <div>
                            <div>
                                <p>2016 - 2018</p>
                            </div>
                            <div>
                                <p>CGPA : 9.2</p>
                            </div>
                            <p>M.P.C.</p>
                            <p>C V Raman Junior College, Wanaparthy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume
