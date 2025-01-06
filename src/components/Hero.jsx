import { useState } from 'react'
import '../css/Hero.css'

const Hero = () => {
    // Heading for carousel
    const heroHeadingArr = [{
        imgSource: "../assets/v1.mp4",
        h1: "All Your Information in One Place",
        h2: "Simplify Management with a Unified Data Platform."
    },
    {
        imgSource: "../assets/v2.mp4",
        h1: "Lower Costs, Higher Value",
        h2: "Offering Premium Features at a Fraction of the Price."
    },
    {
        imgSource: "../assets/v3.mp4",
        h1: "Access Anytime, Anywhere",
        h2: "Empowering You with Data on Demand Across Devices."
    }
    ]
    const [heroheading, setHeroHeading] = useState({})

    return (
        <section className="hero">
           <video autoPlay loop>
            <source src='../assets/v1.mp4' type='video/mp4'/>
           </video>
        </section>
    )
}

export default Hero