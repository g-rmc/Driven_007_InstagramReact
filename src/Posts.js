import Post from './Post';

export default function Posts() {

    const posts = [{    perfil:{img:'./assets/img/6_Malevola.jpg', name:'Malévola'},
                        content:{type:'video', midia1:'./assets/video/Video2.mp4', midia2:'./assets/video/video2.ogg'},
                        likes:{name:'Hermione', number:'127.582'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Eu tava, eu fui! ❤️'},
                            {img:'./assets/img/2_Mickey.jpg', name:'Mickey', text:'Que assustador'}
                        ]
                    },
                    {   perfil:{img:'./assets/img/2_Mickey.jpg', name:'Mickey'},
                        content:{type:'picture', midia1:'./assets/img/Foto1.jpg', midia2:''},
                        likes:{name:'Jack', number:'52.631'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Tenho uma foto igualzinha a essa no meu feed'},
                            {img:'./assets/img/1_Hermione.jpg', name:'Hermione', text:'Hogwarts poderia aprender sobre manutenção de castelos'}
                        ]
                    },
                    {   perfil:{img:'./assets/img/1_Hermione.jpg', name:'Hermione'},
                        content:{type:'picture', midia1:'./assets/img/Foto2.jpg', midia2:''},
                        likes:{name:'Malévola', number:'87.124'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Minha primeira tatuagem pega exatamente esse ângulo'},
                            {img:'./assets/img/3_Shrek.jpg', name:'Shrek', text:'Alguém sabe dizer se ogros são bem-vindos?'}
                        ]
                    },
                    {   perfil:{img:'./assets/img/7_Stitch.jpg', name:'Stitch'},
                        content:{type:'picture', midia1:'./assets/img/Foto3.jpg', midia2:''},
                        likes:{name:'Shrek', number:'31.964'},
                        comments:[
                            {img:'./assets/img/0_Guilherme.jpg', name:'Guilherme', text:'Ainda não sei como tive coragem de andar nisso'},
                            {img:'./assets/img/5_JackSkellington.jpg', name:'Jack', text:'Os gritos me fazem lembrar do Halloween'}
                        ]
                    },
    ];

    return (

        <div class="posts">

            {posts.map(Post)}

        </div>
    )
}