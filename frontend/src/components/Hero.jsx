import { useEffect, useState, useRef } from 'react'
import '../css/Hero.css'
import Header from './header';
import video1 from '../assets/v1.mp4';
import video2 from '../assets/v2.mp4';
import video3 from '../assets/v3.mp4';

const Hero = ({setFormState}) => {
    const heroHeadingArr = [{
        vidSource: video1,
        h1: "All Your Information in One Place",
        h2: "Simplify Management with a Unified Data Platform."
    },
    {
        vidSource: video2,
        h1: "Lower Costs, Higher Value",
        h2: "Offering Premium Features at a Fraction of the Price."
    },
    {
        vidSource: video3,
        h1: "Access Anytime, Anywhere",
        h2: "Empowering You with Data on Demand Across Devices."
    }
    ]
    const [carouselUpdater, setCarouselUpdater] = useState(0);
    const videoref = useRef(null);

    useEffect(() => {
        const videoElement = videoref.current;
        videoElement.playbackRate = 1.5
        const timer = setInterval(() => {
            setCarouselUpdater((prev) => (prev + 1) % heroHeadingArr.length);
        }, 7000)

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero">
            <Header setFormState={setFormState}/>
            {heroHeadingArr?.map((e, i) => {
                return (<div key={i} className='heror' style={{display: i===carouselUpdater? "flex": "none"}}>
                    <video autoPlay loop muted key={carouselUpdater} ref={videoref}>
                        <source src={e.vidSource} type='video/mp4'/>
                    </video>
                    <h1>{e.h1}</h1>
                    <h3>{e.h2}</h3>
                </div>)
            })}
        </section>
    )
}

export default Hero