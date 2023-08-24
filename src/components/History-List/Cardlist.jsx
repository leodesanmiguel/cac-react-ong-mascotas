import {get} from '../../data/utils/httpCliente.js';
import {useState, useEffect} from 'react';
import './Card_list.css';
import {Cardog} from './Cardog';



export const Cardlist=()=>{
    
  
  const [dogs,setDogs] = useState([]);
 

  useEffect( () => {
    get("/v1/images/search?size=small&mime_types=jpg&has_breeds=true&order=RANDOM&page=0&limit=12")
    .then((data)=>{
      setDogs(data)
    })

  },[])
   /*Por si el arreglo de animales a adoptar está vacio*/
   if(dogs.length === 0){
    return <h1>Por el momento no tenemos amiguitos para adoptar</h1>
  }
  return (
    <div className="container-fluid contenedor">
      <div class="">
        <h1 class="listado">Estas son sus historias</h1>
        <div class="col">
          <ul className="dogscards">  
            {dogs.map((dog)=>(
              <Cardog key={dog.index} dog={dog} />
            ))}
          </ul>  
        </div>
      </div>  
        
    </div>
  )
}

