import React from 'react';
import SocialBar from '../Header/SocialBar';
import imgLogo from '../../assets/img/logo.png';
import './Footer.css';
export const Footer = () => {
    return (
      <>
        
        
        <footer className='footer'>
          
		      <div className=' py-4 py-md-5 px-4  '>
            <div className="row">
              <div className="col-lg-3 mb-3 logoFooter" >
                <img src={ imgLogo}  alt="Logo ONG"/>
                <span className="fs-4">PELUDITOS ONG</span>

                <ul className="list-unstyled">
                  <li className="mb-2">Trabajo integrador.</li>
                  <li className="mb-2">realizado con React, 2023 CaC.</li>
                  <li className="mb-2">Grupo 4</li>
                </ul>
              </div>
              <aside  className="col-6 col-lg-2 offset-lg-1 mb-3" >
                <h3 className="fs-4" >ADOPTAR</h3>			
                <div className=" interior">
                    <ul className="list-unstyled ">
                      <li>
                        <a href="/">Perros</a>
                      </li>
                      <li>
                        <a href="/">Gatos</a>
                      </li>
                      <li>
                        <a href="/">Requisitos de Adopción</a>
                      </li>
                    </ul>
                  </div>
                </aside>
                <aside id="text-6" className="col-6 col-lg-2 offset-lg-1 mb-3">
                  <h3 className="fs-4">INVOLUCRATE</h3>			
                  <div className="interior">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">Quiero ser Voluntario</a>
                      </li>
                      <li>
                        <a href="/">Quiero dar tránsito</a>
                      </li>
                      <li>
                        <a href="/">Denunciar maltrato</a>
                      </li>
                    </ul>
                  </div>
                </aside>
                <aside id="text-7" className="col-6 col-lg-2 offset-lg-1 mb-3">
                  <h3 className="fs-4">COLABORAR</h3>			
                  <div className="interior">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">Donar Dinero</a>
                      </li>
                      <li>
                        <a href="/">Apadrinar</a>
                      </li>
                      <li>
                        <a href="/">Donar Medicamentos e Insumos</a>
                      </li>
                    </ul>
                  </div>
              </aside>
                				
              </div>
          </div>   
           <div className="social"> 
            <SocialBar  />
          </div>
      
      </footer>
      
     
        
    </>
  );
};
  