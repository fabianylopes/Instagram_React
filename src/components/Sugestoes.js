import Sugestao from "./Sugestao"
import { sugestao } from "./Data"

export default function Sugestoes(){
    return (
        <>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestao.map((s) => (<Sugestao imagem={s.imagem} usuario={s.usuario} motivo={s.motivo}/>))}
                
            </div>
        </>
    )
}
