import React from 'react'
import './skills.css'
import HTML from '../../Images/html5.ico'
import CSS from '../../Images/css3.webp'
import JS from '../../Images/js.png'
import Python from '../../Images/Python.webp'
import NodeJS from '../../Images/nodejs.png'
import MySQL from '../../Images/mysql.png'
import MSSQL from '../../Images/mssql.png'
import Django from '../../Images/django.png'
import ReactJS from '../../Images/reactjs.png'
import ExpressJS from '../../Images/expressjs.png'


const Skills = () => {
    return (
        <>
            <div id='skills' className='mySkillsMain'>
                <div className='mySkillsFirstDiv'>
                    <h1>My Skills</h1>
                </div>
                <div className='mySkillsSecondDiv'>
                    <div>
                        <div>
                            <img src={HTML} className='skillsImg' alt='HTML Pic' />
                        </div>
                        <h2>HTML5</h2>
                    </div>
                    <div>
                        <div>
                            <img src={CSS} className='skillsImg' alt='CSS Pic' />
                        </div>
                        <h2>CSS3</h2>
                    </div>
                    <div>
                        <div>
                            <img src={JS} className='skillsImg' alt='Javascript Pic' />
                        </div>
                        <h2>JAVASCRIPT</h2>
                    </div>
                    <div>
                        <div>
                            <img src={MySQL} className='skillsImg' alt='MySQL Pic' />
                        </div>
                        <h2>MYSQL</h2>
                    </div>
                    <div>
                        <div>
                            <img src={MSSQL} className='skillsImg' alt='MSSQL Pic' />
                        </div>
                        <h2>MSSQL</h2>
                    </div>
                </div>
                <div className='mySkillsThirdDiv'>
                    <div>
                        <div>
                            <img src={Python} className='skillsImg' alt='Python Pic' />
                        </div>
                        <h2>PYTHON</h2>
                    </div>
                    <div>
                        <div>
                            <img src={NodeJS} className='skillsImg' alt='NodeJS Pic' />
                        </div>
                        <h2>NODEJS</h2>
                    </div>
                    <div>
                        <div>
                            <img src={Django} className='skillsImg' alt='Django Pic' />
                        </div>
                        <h2>DJANGO</h2>
                    </div>
                    <div>
                        <div>
                            <img src={ReactJS} className='skillsImg' alt='ReactJS Pic' />
                        </div>
                        <h2>REACTJS</h2>
                    </div>
                    <div>
                        <div>
                            <img src={ExpressJS} className='skillsImg' alt='ExpressJS Pic' />
                        </div>
                        <h2>EXPRESSJS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
