import { useState } from 'react';
import { aboutData } from './aboutData';
import './App.css'



function About(){
        const [portrait, setPortrait] = useState(0);
        const {image, paragraph} = aboutData[portrait];
        const [showMore, setShowMore] = useState(false);
    
        const previousPortrait = () =>{
        setPortrait((portrait =>{
            portrait --;
            if (portrait < 0){
            return aboutData.length - 1;
            }
            return portrait;
        }))
        }
    
        const nextPortrait = () =>{
        setPortrait((portrait =>{
            portrait++;
            if (portrait > aboutData.length - 1){
            portrait = 0;
            }
            return portrait;
        }))
        }

        return(
        <div>
        <div className="cont">
        <h1>Oscar De La Vesna Wedding Dresses</h1>
        </div>

        <div className="cont">
        <button className="slideBtn" onClick={previousPortrait}>Prev</button><img className="slideImg" src={image} width="900" height="450vh" alt="shop"/><button className="slideBtn" onClick={nextPortrait}>Next</button>
        </div>

        <div className="cont">
        <p>{showMore ? paragraph : paragraph.substring(0, 170) + "..."}
                <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}
                </button>
        </p>
        </div>

        </div>
        )
    
}

export default About;