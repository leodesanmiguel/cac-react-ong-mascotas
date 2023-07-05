import './Histories.css';
import Cards from '../../components/History-Card/Cards';

export const Histories = () => {
  return (
    <>
      <section className="container-fluid carousel-cards">
        <h3 className="section-card text-center">Historias Destacadas</h3>       
        <div className="wave">
          {/*imagen de wave a modo decorativo*/}
          <svg id="wave" style={{transform:"rotate(0deg)", transition:" 0.3s"}} viewBox="0 0 1700 900" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
          <path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,245L60,253.2C120,261,240,278,360,261.3C480,245,600,196,720,147C840,98,960,49,1080,24.5C1200,0,1320,0,1440,65.3C1560,131,1680,261,1800,277.7C1920,294,2040,196,2160,147C2280,98,2400,98,2520,155.2C2640,212,2760,327,2880,375.7C3000,425,3120,408,3240,383.8C3360,359,3480,327,3600,310.3C3720,294,3840,294,3960,310.3C4080,327,4200,359,4320,318.5C4440,278,4560,163,4680,171.5C4800,180,4920,310,5040,343C5160,376,5280,310,5400,253.2C5520,196,5640,147,5760,114.3C5880,82,6000,65,6120,49C6240,33,6360,16,6480,73.5C6600,131,6720,261,6840,326.7C6960,392,7080,392,7200,383.8C7320,376,7440,359,7560,326.7C7680,294,7800,245,7920,253.2C8040,261,8160,327,8280,367.5C8400,408,8520,425,8580,432.8L8640,441L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"></path>
          </svg> 
          <Cards />
        </div>
    </section>
      
    </>
  );
};
