import React from "react";

/* Styles */
import './contactanos.scss'

/* Images */
import logo from "../../assets/imgs/components/logo_school.png";

export function Contactanos() {
  return (
    <section id="contactanos">
      <div className="contactanos_container container_responsive">
        <div className="contactUs_card">
          <div className="left-side">
            <img src={logo} alt="" className="logo-img" />
          </div>

          <div className="rigth-side">
            <h1>
              <font color="#4285F4">CON</font>
              <font color="#34A853">TAC</font>
              <font color="#FBBC05">TA</font>
              <font color="#EA4335">NOS</font>
            </h1>

            <p>Si deseas obtener más información sobre la institución ... Mauris leo felis, tincidunt nec rutrum vitae, varius ac nisi... registra tus datos para poder contactarnos contigo.</p>
            
            <form>
              <div className="inputForm halfGridLeft">
                <label>
                  Nombres:
                </label>
                <input type="text" name="name" placeholder="Nombres" />
              </div>
              <div className="inputForm">
                <label>
                  Apellido Paterno:
                </label>
                <input type="text" name="lastName" placeholder="Apellido Paterno" />
              </div>
              <div className="inputForm">
                <label>
                  Apellido Materno:
                </label>
                <input type="text" name="mother-lastName" placeholder="Apellido Materno" />
              </div>
              <div className="inputForm">
                <label>
                  DNI:
                </label>
                <input type="text" name="dni" placeholder="DNI" />
              </div>
              <div className="inputForm oneGrid">
                <label>
                  Correo Electrónico:
                </label>
                <input type="text" name="email" placeholder="Correo Electrónico" />
              </div>
              <div className="inputForm">
                <label>
                  Telefono / Celular:
                </label>
                <input type="text" name="cel" placeholder="Telefono / Celular" />
              </div>
              <div className="inputForm">
                <label>
                  Grado de Selección
                </label>
                <select name="options" className='grade'>
                  <option defaultValue="0">- Seleccione un Grado -</option>
                  <option value="1">1° Grado</option>
                  <option value="2">2° Grado</option>
                  <option value="3">3° Grado</option>
                  <option value="3">4° Grado</option>
                  <option value="3">5° Grado</option>
                </select>
              </div>
            </form>
            
            <div className="check-terms">
              <span>
                <input type="checkbox" id="policy" />
                Acepto las <a href="#">Políticas de Privacidad</a>.
              </span>
              <span>
                <input type="checkbox" id="terms" />
                Acepto recibir información útil sobre eventos y programas de la Institucion Educativa Alfredo Rebaza Acosta para <a href="#">finalidades adicionales</a>. Puedo darme de baja en cualquier momento.
              </span>
            </div>
            
            <button>
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}