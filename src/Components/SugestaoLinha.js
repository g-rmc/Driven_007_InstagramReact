export default function SugestaoLinha(props) {

    return (
        <div class="sugestao-linha">
            <div>
                <img src={props.img} alt="" />
                <div>
                    <h1>{props.user}</h1>
                    <h2>{props.status}</h2>
                </div>
            </div>
            <p>Seguir</p>
        </div>
    )
}