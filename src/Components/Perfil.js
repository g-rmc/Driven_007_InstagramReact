export default function Perfil(props) {

    return (
        <div class="perfil">
            <img src={props.img} alt="" />
            <div>
                <h1>{props.user}</h1>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}