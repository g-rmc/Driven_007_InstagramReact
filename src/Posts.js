import React from 'react';

export default function Posts() {

    const posts = [{    perfil:{img:'./assets/img/6_Malevola.jpg', name:'Malévola'},
                        content:{type:'video', midia1:'./assets/video/Video2.mp4', midia2:'./assets/video/video2.ogg'},
                        likes:{like:false, name:'Hermione', number:'127.582'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Eu tava, eu fui! ❤️', like:false},
                            {img:'./assets/img/2_Mickey.jpg', name:'Mickey', text:'Que assustador', like:false}
                        ]
                    },
                    {   perfil:{img:'./assets/img/2_Mickey.jpg', name:'Mickey'},
                        content:{type:'picture', midia1:'./assets/img/Foto1.jpg', midia2:''},
                        likes:{like:false, name:'Jack', number:'52.631'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Tenho uma foto igualzinha a essa no meu feed', like:false},
                            {img:'./assets/img/1_Hermione.jpg', name:'Hermione', text:'Hogwarts poderia aprender sobre manutenção de castelos', like:false}
                        ]
                    },
                    {   perfil:{img:'./assets/img/1_Hermione.jpg', name:'Hermione'},
                        content:{type:'picture', midia1:'./assets/img/Foto2.jpg', midia2:''},
                        likes:{like:false, name:'Malévola', number:'87.124'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Minha primeira tatuagem pega exatamente esse ângulo', like:false},
                            {img:'./assets/img/3_Shrek.jpg', name:'Shrek', text:'Alguém sabe dizer se ogros são bem-vindos?', like:false}
                        ]
                    },
                    {   perfil:{img:'./assets/img/7_Stitch.jpg', name:'Stitch'},
                        content:{type:'picture', midia1:'./assets/img/Foto3.jpg', midia2:''},
                        likes:{like:false, name:'Shrek', number:'31.964'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Ainda não sei como tive coragem de andar nisso', like:false},
                            {img:'./assets/img/5_JackSkellington.jpg', name:'Jack', text:'Os gritos me fazem lembrar do Halloween', like:false}
                        ]
                    },
    ];

    // const [like, setLike] = React.useState(false);

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

    function Like(props){
        props.likes.like = !props.likes.like
    }

    return (

        <div class="posts">

            {posts.map(props => (

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
                            {props.likes.like === true ?
                                <ion-icon name="heart" class='red' onClick={''}></ion-icon> :
                                <ion-icon name="heart-outline"  class='black' onClick={''}></ion-icon>
                            }
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
            ))}

        </div>
    )
}