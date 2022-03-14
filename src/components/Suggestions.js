import { suggestion } from "./Data"

export default function Suggestions(){
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestion.map((s) => (<Suggestion imagem={s.imagem} usuario={s.usuario} motivo={s.motivo}/>))}
            
        </div>
    );
}

function Suggestion(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">{props.motivo}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}
