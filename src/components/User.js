export default function User(props){
    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
            <strong>{props.conta}</strong>
            {props.nome}
            </div>
        </div>
    );
}
