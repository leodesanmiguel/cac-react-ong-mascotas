
import './Cardog.css';


export const Cardog = ({dog}) => {
  const imgURL= `https://cdn2.thedogapi.com/images/${(dog.id)}.jpg`
  return (
    
      <li className="card-dog">
        
            <div className="card h-100">

              <img className="card-img-top img" src={imgURL} alt ="" />
              <div className="card-body">
                <h5 className="card-title">Nombre Perrito</h5>
                <p className="card-text">A fines de Agosto de 2019 nos llegaba un alerta desde Solano por un cachorro agonizando en en el medio de la calle. </p>
              </div>
              

              
            </div>
         
      </li>
    
    
  )
}