import React from 'react';

function Picture({midia}) {

    return (<div className="post-foto">
        <img src={midia} alt=""/>
    </div>)
};

function Video({midia1, midia2}) {

    return (<div className="post-video">
        <video controls autoPlay>
            <source src={midia1} type="video/mp4" />
            <source src={midia2} type="video/ogg" />
            Seu navegador não suporta vídeos
        </video>
    </div>)
};

function Comments({img, name, text, liked}) {

    const [like, setLike] = React.useState(liked);

    return (
        <div>
            <div>
                <img src={img} alt=""/>
                <h1>{name}</h1>
                <p>{text}</p>
            </div>
            {like === true ?
                <ion-icon name="heart" class='md hydrated red' onClick={() => setLike(!like)}></ion-icon> :
                <ion-icon name="heart-outline" class='md hydrated black' onClick={() => setLike(!like)}></ion-icon>
            }
        </div>

    )
}

export default function Post({  perfilImg, perfilName,
                                contentType, contentMidia1, contentMidia2,
                                liked, likesImg, likesName, likesNumber,
                                comments}) {

    const [like, setLike] = React.useState(liked);

    return (

        <div className="post">

            <div className="post-topo">
                <div>
                    <img src={perfilImg} alt=""/>
                    <h1>{perfilName}</h1>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div className="post-conteudo" onClick={() => setLike(true)}>
                {contentType === 'video' ?
                    <Video midia1={contentMidia1} midia2={contentMidia2} /> :
                    <Picture midia={contentMidia1} />
                }
            </div>
            
            <div className="post-botoes">
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

            <div className="post-curtidas">
                <img src={likesImg} alt=""/>
                <p>Curtido por <strong>{likesName}</strong> e <strong>outras {likesNumber} pessoas</strong></p>
            </div>

            <div className="post-comentarios">

                {comments.map((comment, index) => <Comments key = {index} img = {comment.img} name = {comment.name} text = {comment.text} liked = {comment.liked}/>)}

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