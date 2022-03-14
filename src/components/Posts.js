import Actions from "./Actions";
import { post } from "./Data";

export default function Posts(){
    return (
        <div class="posts">
            {post.map((p) =>(<Post 
            imagemTopo={p.imagemTopo}
            usuario={p.usuario}
            imagemConteudo={p.imagemConteudo}
            imagemCurtidas={p.imagemCurtidas}
            curtido={p.curtido}
            numeroCurtidas={p.numeroCurtidas}
            legenda={p.legenda}
            contaComentario1={p.contaComentario1}
            comentario1={p.comentario1}
            contaComentario2={p.contaComentario2}
            comentario2={p.comentario2}
            />))}
        </div>
    );
}

function Post(props){
    return (
        <>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imagemTopo} />
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imagemConteudo} />
                </div>

                <div class="fundo">
                    <Actions/>

                    <div class="curtidas">
                        <img src={props.imagemCurtidas} />
                        <div class="texto">
                            Curtido por <strong>{props.curtido}</strong> e <strong>outras {props.numeroCurtidas} pessoas</strong>
                        </div>
                    </div>

                    <div class="legenda"><strong>{props.usuario} </strong>{props.legenda}</div>
                
                    <div class="comentarios">
                        <div class="comentario">
                            <p class="texto"><strong>{props.contaComentario1} </strong>{props.comentario1}</p><span class="emoji">&#9825;</span>
                        </div>
                        <div class="comentario">
                            <p class="texto"><strong>{props.contaComentario2} </strong>{props.comentario2}</p><span class="emoji">&#9825;</span>
                        </div>
                    </div> 
                    
                    <div class="input">
                        <ion-icon class="emoji" name="happy-outline" size="large"></ion-icon>
                        <input type ="text" placeholder="Adicione um comentário..."></input>
                        <button>Publicar</button>
                    </div>

                </div>
            </div>
        </>
    )
}
