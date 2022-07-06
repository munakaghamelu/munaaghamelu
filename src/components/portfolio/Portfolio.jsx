import { useState } from "react";
import "./portfolio.scss";

export default function Portfolio(){

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            title: "Paggle",
            img: "assets/paggle_web.gif",
            desc: "View Code",
            link: "https://github.com/munakaghamelu/paggle"
        },
        {
            id: "2",
            title: "bymunako",
            img: "assets/art_web.png",
            desc: "View Code",
            link: "https://github.com/munakaghamelu/bymunako"
        },
        {
            id: "3",
            title: "Mafia Moves",
            img: "assets/mm_web.png",
            desc: "View Code",
            link: "https://github.com/munakaghamelu/running_website"
        },
    ];

    const handleClick = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide< data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="portfolio" id="portfolio">
            <div 
                className="slider" 
                style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
            >
            {data.map((d) => (
            <div className="container">
                
                <div className="header">
                    <h2>{d.title}</h2>
                    <p><a href={d.link} target="_blank">{d.desc}</a></p>
                </div>

                <div className="collage">
                    <img src={d.img}/>
                </div>

            </div>
        ))}
    </div>

        <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>

    </div>
    );
}