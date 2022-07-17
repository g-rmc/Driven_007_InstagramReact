import React from 'react';
import Picture from './Picture';
import Video from './Video';
import Comments from './Comments';

export default function Post(props) {

    const [like, setLike] = React.useState(false);

    return (

        <div class="post">

            <div class="post-topo">
                <div>
                    <img src={props.perfilImg} />
                    <h1>{props.perfilName}</h1>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div class="post-conteudo" onClick={() => setLike(true)}>
                {props.contentType === 'video' ?
                    <Video midia1={props.contentMidia1} midia2={props.contentMidia2} /> :
                    <Picture midia={props.contentMidia1} />
                }
            </div>
            
            <div class="post-botoes">
                <div>
                    {like === true ?
                        <ion-icon name="heart" class='md hydrated red' onClick={() => setLike(!like)}></ion-icon> :
                        <ion-icon name="heart-outline" class='md hydrated black' onClick={() => setLike(!like)}></ion-icon>
                    }
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <img src="./assets/img/Flag.png" alt="" />
            </div>

            <div class="post-curtidas">
                <img src={props.likesImg} />
                <p>Curtido por <strong>{props.likesName}</strong> e <strong>outras {props.likesNumber} pessoas</strong></p>
            </div>

            <div class="post-comentarios">

                {props.comments.map(comment => <Comments img = {comment.img} name = {comment.name} text = {comment.text}/>)}

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