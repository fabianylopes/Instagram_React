import Acoes from "./Acoes";

export default function Post(props){
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
                    <Acoes/>

                    <div class="curtidas">
                        <img src={props.imagemCurtidas} />
                        <div class="texto">
                            Curtido por <strong>{props.curtido}</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
