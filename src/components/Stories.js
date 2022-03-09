import Story from "./Story"
import { story } from "./Data"

export default function Stories(){
    return (
        <>
            <div class="stories">
                {story.map((s) => (<Story imagem={s.imagem} usuario={s.usuario}/>))}

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </>
    )
}
