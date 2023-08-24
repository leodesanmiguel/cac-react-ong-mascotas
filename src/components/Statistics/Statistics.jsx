import "./Statistics.css"
import icono1 from "../../assets/img/stats-1.png"
import icono2 from "../../assets/img/stats-2.png"
import icono3 from "../../assets/img/stats-3.png"


export const Statistics = () => {
  return (
    <section className="stats">
      <div className="content-box">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="stat-items">
                <img src={icono1} alt="algoo"   />
                <h2><span className="counter text-center">+1500</span></h2>
                <p><span>Rescatados</span></p>
                <p>150 por año</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-items">
                <img src={icono2} alt="algoo"/>
                <h2><span className="counter text-center">+1200</span></h2>
                <p><span>Adoptados</span></p>
                <p>120 por año</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-items">
                <img src={icono3} alt="algoo" />
                <h2><span className="counter text-center">+30</span></h2>
                <p><span>Voluntarios y Colaboradores</span></p>
                <p>Nos ayudan día a día</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

  