import { useState} from 'react'
import '../css/Hero.css'
import video1 from '../assets/v1.mp4';
import video2 from '../assets/v2.mp4';
import video3 from '../assets/v3.mp4';

const Hero = () => {
    // Heading for carousel
    const heroHeadingArr = [{
        imgSource: video1,
        h1: "All Your Information in One Place",
        h2: "Simplify Management with a Unified Data Platform."
    },
    {
        imgSource: video2,
        h1: "Lower Costs, Higher Value",
        h2: "Offering Premium Features at a Fraction of the Price."
    },
    {
        imgSource: video3,
        h1: "Access Anytime, Anywhere",
        h2: "Empowering You with Data on Demand Across Devices."
    }
    ]
    const [heroheading, setHeroHeading] = useState({})

    
    return (
        <section className="hero">
            <video autoPlay loop muted >
                <source src={video1} type='video/mp4' />
            </video>
        </section>
    )
}

export default Hero