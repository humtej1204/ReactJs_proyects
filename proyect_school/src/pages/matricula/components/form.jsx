/* Styles */
import './form.scss'

export function MatriculaForm() {
    return (
        <div className="matriculaForm">
            <div className="formTitle">
                <font color="#4285F4">MAT</font>
                <font color="#34A853">RÍC</font>
                <font color="#FBBC05">ULA</font>
                <font color="#EA4335"> 2023</font>
            </div>
            <p>
                Si deseas obtener más información sobre el proceso de matricula en nuestra institucion, registra tus datos para poder contactarnos contigo.
            </p>
            <form>
                <div className="inputForm halfGridLeft">
                    <label>
                        Nombres:
                    </label>
                    <input type="text" name="name" placeholder="Nombres" />
                </div>
                <div className="inputForm halfGridRight">
                    <label>
                        Apellido Paterno:
                    </label>
                    <input type="text" name="lastName" placeholder="Apellido Paterno" />
                </div>
                <div className="inputForm halfGridLeft">
                    <label>
                        Apellido Materno:
                    </label>
                    <input type="text" name="mother-lastName" placeholder="Apellido Materno" />
                </div>
                <div className="inputForm halfGridRight">
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
                <div className="inputForm halfGridLeft">
                    <label>
                        Telefono / Celular:
                    </label>
                    <input type="text" name="cel" placeholder="Telefono / Celular" />
                </div>
                <div className="inputForm halfGridRight">
                    <label>
                        Grado de Selección
                    </label>
                    <select name="options">
                        <option defaultValue="0">- Seleccione un Grado -</option>
                        <option value="1">1° Grado</option>
                        <option value="2">2° Grado</option>
                        <option value="3">3° Grado</option>
                        <option value="4">4° Grado</option>
                        <option value="5">5° Grado</option>
                    </select>
                </div>
                
                <div className="check-terms oneGrid">
                    <span>
                        <input type="checkbox" id="policy" />
                        Acepto las <a href="#">Políticas de uso de datos.</a>
                    </span>
                </div>

                <button className="send_btn oneGrid">Enviar</button>
            </form>
        </div>
    );
}