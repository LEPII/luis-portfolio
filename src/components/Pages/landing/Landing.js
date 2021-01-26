import React from 'react'
import './Landing.css'
import Rocket from './assets/vector.png'
const Landing = () => {
    
    return (
       <section className="landing__container">
        <div className="landing__text"> 
        <h1 className="landing__name"> LUIS   PEREZ  </h1>
        <h2 className="landing__welcome"> WELCOME TO MY PORTFOLIO </h2> 
        <h4 className="landing__about__me"> Hello World! I’m a devoted Front-End Developer who wants to express my creativity in the field of engineering and share my vision that would impact people around the world! </h4>
        <div className="landing__discover_button"> 
        <button className="landing__discover"> DISCOVER </button>
        </div>
        <img className={"landing__rocket__logo"} src={Rocket} alt="rocket"/> 
        </div> 
       </section>
    )
}

export default Landing
