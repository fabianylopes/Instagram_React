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
                />))}
            </div>
        </>
    )
}
