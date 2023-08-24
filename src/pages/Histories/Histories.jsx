import './Histories.css';
import Cards from '../../components/History-Card/Cards';

export const Histories = () => {
  return (
    <>
      <section className="container-fluid carousel-cards">
        <h3 className="section-card text-center">Historias Destacadas</h3>       
        <div className="wave"> 
          <Cards />
        </div>
    </section>
      
    </>
  );
};
