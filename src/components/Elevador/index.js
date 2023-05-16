
import './Elevador.css';
import {useState} from "react";

function Elevador() {
   const [ andarAtual, setAndarAtual] = useState(0);
   const [ bottom, setBottom] = useState(0);
   function subir() {
        if(andarAtual < 8) {
            setAndarAtual(andarAtual + 1);
            setBottom(bottom + 12)
        }
   }

   function descer() {
       if(andarAtual > 0) {
           setAndarAtual(andarAtual - 1);
           setBottom(bottom - 12)
       }
   }

    return (
        <div className="app-elevador">
            <div className="andar-atual">
                <strong>Andar atual: </strong> {andarAtual}
            </div>
            <div className="botoes">
                <button onClick={subir}>Subir</button>
                <button onClick={descer}>Descer</button>
            </div>
            <div className="predio">
                    <div style={{bottom: `${bottom}px`}} className="elevador"></div>
            </div>
        </div>
    );
}

export default Elevador;