
import './Collaborate.css';
import img1 from '../../assets/img-colaborador/img1.png';
import img2 from '../../assets/img-colaborador/logoVet.png';
import img3 from '../../assets/img-colaborador/pngegg.png';
import img4 from '../../assets/img-colaborador/Logo-pelu.png';

export const Collaborate = () => {
  return (
    <>
      <section className="colaborador mb-6" >
    
        <h1 className="titulo-colaborador">Empresas que colaboran con la ONG</h1>
        <div className="content-box colaborador" >
          <div className="container">
            <div className="row" >
            
            
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <img className="figure-img img-fluid mx-auto d-block" src={img1} alt="empresa colaboradora"      />
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3" >
                <img className="figure-img img-fluid mx-auto d-block" src={img2} alt="empresa colaboradora"      />
                
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3" >
                <img className="figure-img img-fluid mx-auto d-block" src={img3} alt="empresa colaboradora"      />
                
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3" >
                <img className="figure-img img-fluid mx-auto d-block" src={img4} alt="empresa colaboradora"      />
              </div>
              </div>
          </div>
        </div>
       
    </section>  
    </>
  );
};
