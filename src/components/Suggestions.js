import Suggestion from "./Suggestion"
import { suggestion } from "./Data"

export default function Suggestions(){
    return (
        <>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {suggestion.map((s) => (<Suggestion imagem={s.imagem} usuario={s.usuario} motivo={s.motivo}/>))}
                
            </div>
        </>
    )
}
