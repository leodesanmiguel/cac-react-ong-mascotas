import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import './Card.css';
import { dogs as data } from '../../data/dogs';
import { useState, useEffect } from 'react';




function Card( img, text, title){
   
    const responsive = {
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        laptop : {
            breakpoint: { max: 1024, min: 970 },
            items: 3
        },
        tablet: {
          breakpoint: { max: 969, min: 690 },
          items: 2
    
        },
        mobile: {
          breakpoint: { max: 689, min: 464 },
          items: 1
        }
      };
      const [dogs, setDogs] = useState([]);
      useEffect( () => {
            setDogs(data);
      }, []);
      /*Por si el arreglo de animales a adoptar está vacio*/
      if(dogs.length === 0){
        return <h1>Por el momento no tenemos amiguitos para adoptar</h1>
      }
    return(
        <>
            <div className="contiene-cards">
                
                <Carousel responsive={responsive}>
                    {   
                        dogs.map(dog => {
                            return(
                                
                                    <div  key={dogs.index} className="card container-sm">
                                        <div className="img-cover">
                                            <img src={ dog.img } className="card-img-top"  alt={ dog.title } />                   
                                        </div>   
                                        <div className="card-body">
                                            <h5 className="card-title mb-2">{ dog.title }</h5>
                                            <p className="card-text">{ dog.text }</p>
                                            <a href="/" className="btn btn-ligth btn-card" >Ver Historia</a>
                                        </div>
                                    </div>
                                   
                            )
                        })
                    }
            
                </Carousel>
                
            </div>

        </>
    );
};

export default Card;
