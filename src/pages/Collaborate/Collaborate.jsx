
import './Collaborate.css';
import img1 from '../../assets/img-colaborador/img1.png';
import img2 from '../../assets/img-colaborador/logoVet.png';
import img3 from '../../assets/img-colaborador/pngegg.png';
import img4 from '../../assets/img-colaborador/Logo-pelu.png';

export const Collaborate = () => {
  return (
    <>
      <section className="colaborador">
    
        <h1 className="titulo-colaborador">Empresas que colaboran con la ONG</h1>

        <div className="container  col-3 img-colaborador d-flex">
          
            <div className="empresas">
              <img src={img1}  alt="imagen de marca que colabora con la ong"/>
            </div>
          
            <div className="empresas">
              <img src={img2}  alt="imagen de marca que colabora con la ong"/>
            </div>
          
          
            <div className="empresas">
              <img src={img3}  alt="imagen de marca que colabora con la ong"/>
            </div>
            <div className="empresas">
              <img src={img4}  alt="imagen de marca que colabora con la ong"/>
            </div>
            
        </div>  

    </section>  
    </>
  );
};
