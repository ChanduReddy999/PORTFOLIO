import React,{useEffect} from 'react'
import Typed from 'typed.js';
import './welcome.css'


function Welcome() {
    useEffect(() => {
        const typed = document.querySelector('.typed');
        if (typed) {
            let typed_strings = typed.getAttribute('data-typed-items');
            typed_strings = typed_strings.split(',');
            new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 300,
                backSpeed: 200,
                backDelay: 200
            });
        }
    }, []);
    return (
        <>
            <div className='welcome' id='dashBoard'>
                <h1 className='chandu'>Chandra Shekar Reddy Vadala</h1>
                <h2 className='developer hero-subtitle'>I'm a <span class="typed" data-typed-items="Data Analyst, Web Developer, Full Stack Developer"></span></h2>
            </div>
        </>
    )
}

export default Welcome
