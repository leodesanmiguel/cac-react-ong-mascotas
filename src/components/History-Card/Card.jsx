import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import './Card.css';

//importando las imágenes del carousel
import uno from '../../assets/img-cards/uno.jpg';
import dos from '../../assets/img-cards/dos.jpg';
import tres from '../../assets/img-cards/tres.jpg';
import cuatro from '../../assets/img-cards/cuatro.jpg';

const cards = [
    {
        img: uno,
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        title:"Boby"
    },
    {
        img: dos,
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        title:"Reina"
    },
    {
        img: tres,
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        title:"Peter"
    },
    {
        img: cuatro,
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        title:"Tomy"
    }
]



export const Card = (img, text, title ) => {
    const responsive = {
        //Responsive
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
    
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
            <div className="contenedor">
                
                <Carousel responsive={responsive}>
                    {
                        cards.map(card => {
                            return(
                                
                                    <div className="card">
                                        <div className="img-cover">
                                            <img src={ card.img } className="card-img-top"  alt="foto de" />                   
                                        </div>   
                                        <div className="card-body">
                                            <h5 className="card-title mb-2">{ card.title }</h5>
                                            <p className="card-text">{ card.text }</p>
                                            <a href="/" className="btn" >Ver Historia</a>
                                        </div>
                                    </div>
                                   
                            )
                        })
                    }
            
                </Carousel>;
                
            </div>

        </>
    );
};
