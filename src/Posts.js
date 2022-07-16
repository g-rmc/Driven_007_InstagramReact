export default function Posts() {

    const posts = [{    perfil:{img:'./assets/img/6_Malevola.jpg', name:'Malévola'},
                        content:{type:'video', midia1:'./assets/video/Video2.mp4', midia2:'./assets/video/video2.ogg'},
                        likes:{name:'Hermione', number:'127.582'},
                        comments:{
                            comment1:{img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Eu tava, eu fui! ❤️'},
                            comment2:{img:'./assets/img/2_Mickey.jpg', name:'Mickey', text:'Que assustador'}
                        }
                    },
                    {   perfil:{img:'', name:''},
                        content:{type:'', midia1:'', midia2:''},
                        likes:{name:'', number:''},
                        comments:{
                            comment1:{img:'', name:'', text:''},
                            comment2:{img:'', name:'', text:''}
                        }
                    },
                    {   perfil:{img:'', name:''},
                        content:{type:'', midia1:'', midia2:''},
                        likes:{name:'', number:''},
                        comments:{
                            comment1:{img:'', name:'', text:''},
                            comment2:{img:'', name:'', text:''}
                        }
                    },
                    {   perfil:{img:'', name:''},
                        content:{type:'', midia1:'', midia2:''},
                        likes:{name:'', number:''},
                        comments:{
                            comment1:{img:'', name:'', text:''},
                            comment2:{img:'', name:'', text:''}
                        }
                    },
    ];

    function Post(props) {

        let content;

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

        if (props.content.type === 'video'){

            content = Video(props);

        } else {

            content = Picture(props);
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

                {content}

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

                    <div>
                        <div>
                            <img src={props.comments.comment1.img} />
                            <h1>{props.comments.comment1.name}</h1>
                            <p>{props.comments.comment1.text}</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <div>
                            <img src={props.comments.comment2.img} />
                            <h1>{props.comments.comment2.name}</h1>
                            <p>{props.comments.comment2.text}</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

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

    return (

        <div class="posts">

            {Post(posts[0])}

            <div class="post">

                <div class="post-topo">
                    <div>
                        <img src="./assets/img/6_Malevola.jpg" />
                        <h1>Malévola</h1>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div class="post-video">
                    <video controls autoplay>
                        <source src="./assets/video/Video2.mp4" type="video/mp4" />
                        <source src="./assets/video/video2.ogg" type="video/ogg" />
                        Seu navegador não suporta vídeos
                    </video>
                </div>

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
                    <p>Curtido por <strong>Hermione</strong> e <strong>outras 127.582 pessoas</strong></p>
                </div>

                <div class="post-comentarios">

                    <div>
                        <div>
                            <img src="./assets/img/0_Guilherme.jpg" />
                            <h1>Guilherme</h1>
                            <p>Eu tava, eu fui! ❤️</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <div>
                            <img src="./assets/img/2_Mickey.jpg" />
                            <h1>Mickey</h1>
                            <p>Que assustador</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <h2>Ver todos os comentários</h2>
                    </div>

                    <div>
                        <input type="text" placeholder="Digite seu comentário..." />
                        <button>Publicar</button>
                    </div>

                </div>

            </div>

            <div class="post">

                <div class="post-topo">
                    <div>
                        <img src="./assets/img/2_Mickey.jpg" />
                        <h1>Mickey</h1>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div class="post-foto">
                    <img src="./assets/img/Foto1.jpg" />
                </div>

                <div class="post-botoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <img src="./assets/img/Flag.png" alt="" />
                </div>

                <div class="post-curtidas">
                    <img src="./assets/img/5_JackSkellington.jpg" />
                    <p>Curtido por <strong>Jack</strong> e <strong>outras 52.631 pessoas</strong></p>
                </div>

                <div class="post-comentarios">

                    <div>
                        <div>
                            <img src="./assets/img/0_Guilherme.jpg" />
                            <h1>Guilherme</h1>
                            <p>Tenho uma foto igualzinha a essa no meu feed</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <div>
                            <img src="./assets/img/1_Hermione.jpg" />
                            <h1>Hermione</h1>
                            <p>Hogwarts poderia aprender sobre manutenção de castelos</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <h2>Ver todos os comentários</h2>
                    </div>

                    <div>
                        <input type="text" placeholder="Digite seu comentário..." />
                        <button>Publicar</button>
                    </div>

                </div>

            </div>

            <div class="post">

                <div class="post-topo">
                    <div>
                        <img src="./assets/img/1_Hermione.jpg" />
                        <h1>Hermione</h1>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div class="post-foto">
                    <img src="./assets/img/Foto2.jpg" />
                </div>

                <div class="post-botoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <img src="./assets/img/Flag.png" alt="" />
                </div>

                <div class="post-curtidas">
                    <img src="./assets/img/6_Malevola.jpg" />
                    <p>Curtido por <strong>Malévola</strong> e <strong>outras 87.124 pessoas</strong></p>
                </div>

                <div class="post-comentarios">

                    <div>
                        <div>
                            <img src="./assets/img/0_Guilherme.jpg" />
                            <h1>Guilherme</h1>
                            <p>Minha primeira tatuagem pega exatamente esse ângulo</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <div>
                            <img src="./assets/img/3_Shrek.jpg" />
                            <h1>Shrek</h1>
                            <p>Alguém sabe dizer se ogros são bem-vindos?</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <h2>Ver todos os comentários</h2>
                    </div>

                    <div>
                        <input type="text" placeholder="Digite seu comentário..." />
                        <button>Publicar</button>
                    </div>

                </div>

            </div>

            <div class="post">

                <div class="post-topo">
                    <div>
                        <img src="./assets/img/7_Stitch.jpg" />
                        <h1>Stitch</h1>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div class="post-foto">
                    <img src="./assets/img/Foto3.jpg" />
                </div>

                <div class="post-botoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <img src="./assets/img/Flag.png" alt="" />
                </div>

                <div class="post-curtidas">
                    <img src="./assets/img/3_Shrek.jpg" />
                    <p>Curtido por <strong>Shrek</strong> e <strong>outras 31.964 pessoas</strong></p>
                </div>

                <div class="post-comentarios">

                    <div>
                        <div>
                            <img src="./assets/img/0_Guilherme.jpg" />
                            <h1>Guilherme</h1>
                            <p>Ainda não sei como tive coragem de andar nisso</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <div>
                            <img src="./assets/img/5_JackSkellington.jpg" />
                            <h1>Jack</h1>
                            <p>Os gritos me fazem lembrar do Halloween</p>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>

                    <div>
                        <h2>Ver todos os comentários</h2>
                    </div>

                    <div>
                        <input type="text" placeholder="Digite seu comentário..." />
                        <button>Publicar</button>
                    </div>

                </div>

            </div>

        </div>
    )
}