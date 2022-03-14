import { story } from "./Data"

export default function Stories(){
    return (
        <div class="stories">
            {story.map((s) => (<Story imagem={s.imagem} usuario={s.usuario}/>))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props){
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}
