import aboutImg from '../../assets/img/about-img.jpg'
import './AboutUs.css'

export const AboutUs = () => {
  return (
    <section className='about bg-light'>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 col-sm-12 mb-6 mb-lg-0 about-text">
            <h2>Somos<span> Peluditos</span></h2>
            <p className='mb-4'>Peluditos es una Asociación sin fines de lucro,
              que nace durante el año 2011, fue creada por un grupo de vecinos preocupados
              por el maltrato y abandono de animales en situación de calle en las ciudades. 
              Tratando, desde nuestra humilde posibilidad, hacerles la vida más sencilla a 
              quienes han sufrido la desgracia de vivir fuera de un hogar, bajo la indiferencia 
              y el abandono de la gente.
            </p>
            <a href="/" className='btn text-uppercase d-inline-flex align-items-center'>Conocenos!</a>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="about-img w-100 h-100">
              <img src={aboutImg} alt="Foto del refugio" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>

    </section>

    // <section className="about bg-secondary container py-4 ps-2">

    //   <div className='row align-items-md-stretch'>

    //     <div className='col-md-6 ps-lg-5 mt-md-5'>
    //       <div className="about-text h-100 p-3 ">
    //         <h2 className='mb-4'>Somos "nombre del refugio"</h2>
    //         <p>Callejeritos de Almirante Brown es una Asociación sin fines de lucro,
    //           que nace durante el año 2011, fue creada por un grupo de vecinos preocupados
    //           por el maltrato y abandono de animales en situación de calle en las ciudades. 
    //           Tratando, desde nuestra humilde posibilidad, hacerles la vida más sencilla a 
    //           quienes han sufrido la desgracia de vivir fuera de un hogar, bajo la indiferencia 
    //           y el abandono de la gente.
    //         </p>
    //         <button className='btn py-3'>Conocenos!</button>
    //       </div>
    //     </div>

    //     <div className="col-md-6">
    //       <div className="about-img h-100 p-3">
    //         <img src={aboutImg} alt="Foto de los animales del refugio" className='img-fluid'/>
    //       </div>
    //     </div>
    //   </div>

    // </section>
  );
};
