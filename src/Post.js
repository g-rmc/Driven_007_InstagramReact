export default function Post(props) {

    function Video(props) {

        return (<div class="post-video">
            <video controls autoplay>
                <source src={props.content.midia1} type="video/mp4" />
                <source src={props.content.midia2} type="video/ogg" />
                Seu navegador não suporta vídeos
            </video>
        </div>)
    };

    function Picture(props) {

        return (<div class="post-foto">
            <img src={props.content.midia1} />
        </div>)
    };

    return (

        <div class="post">

            <div class="post-topo">
                <div>
                    <img src={props.perfil.img} />
                    <h1>{props.perfil.name}</h1>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            {props.content.type === 'video' ? Video(props) : Picture(props)}

            <div class="post-botoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <img src="./assets/img/Flag.png" alt="" />
            </div>

            <div class="post-curtidas">
                <img src="./assets/img/1_Hermione.jpg" />
                <p>Curtido por <strong>{props.likes.name}</strong> e <strong>outras {props.likes.number} pessoas</strong></p>
            </div>

            <div class="post-comentarios">

                {props.comments.map(props => (
                    <div>
                        <div>
                            <img src={props.img} />
                            <h1>{props.name}</h1>
                            <p>{props.text}</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                ))}

                <div>
                    <h2>Ver todos os comentários</h2>
                </div>

                <div>
                    <input type="text" placeholder="Digite seu comentário..." />
                    <button>Publicar</button>
                </div>

            </div>

        </div>
    )
}