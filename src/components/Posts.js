import Post from "./Post";
import { post } from "./Data";

export default function Posts(){
    return (
        <>
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
        </>
    )
}
