export default function App() {

    return (
        <div>

            {/* 1 - TOPO */}


            <div class="topo">

                <div class="barra desktop">

                    <div class="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div></div>
                        <img src="./assets/img/logo.png" />
                    </div>

                    <div class="pesquisa">
                        <p>Pesquisar</p>
                    </div>

                    <div class="menus">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>

                </div>

                <div class="barra mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./assets/img/logo.png" />
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>

            </div>

            {/* 2 - CONTEÚDO */}

            <div class="conteudo">

                {/* 2.1 FEED */}

                <div class="feed">

                    <div class="stories">

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/1_Hermione.jpg" />
                            <p>Hermione</p>
                        </div>

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/2_Mickey.jpg" />
                            <p>Mickey</p>
                        </div>

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/3_Shrek.jpg" />
                            <p>Shrek</p>
                        </div>

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/4_Dory.jpg" />
                            <p>Dory</p>
                        </div>

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/5_JackSkellington.jpg" />
                            <p>Jack</p>
                        </div>

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/6_Malevola.jpg" />
                            <p>Malévola</p>
                        </div>

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/7_Stitch.jpg" />
                            <p>Stitch</p>
                        </div>

                        <div class="story">
                            <img src="./assets/img/stories_background.jpg" />
                            <img src="./assets/img/8_BnL.jpg" />
                            <p>BnL</p>
                        </div>

                        <div class="botao">
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>

                    </div>

                    <div class="posts">

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

                </div>

                {/* 2.2 BARRA LATERAL */}

                <div class="container">

                    <div class="barra-lateral">

                        <div class="perfil">
                            <img src="./assets/img/A_Pixar.jpg" alt="" />
                                <div>
                                    <h1>pixar_real.oficial</h1>
                                    <h2>Pixar</h2>
                                </div>
                        </div>

                        <div class="sugestao">

                            <div class="sugestao-topo">
                                <h1>Sugestões para você</h1>
                                <h2>Ver tudo</h2>
                            </div>

                            <div class="sugestao-linha">
                                <div>
                                    <img src="./assets/img/B_Marvel.jpg" alt="" />
                                        <div>
                                            <h1>marvete322</h1>
                                            <h2>Segue você</h2>
                                        </div>
                                </div>
                                <p>Seguir</p>
                            </div>

                            <div class="sugestao-linha">
                                <div>
                                    <img src="./assets/img/C_WarnerBros.png" alt="" />
                                        <div>
                                            <h1>warner_bros</h1>
                                            <h2>Segue você</h2>
                                        </div>
                                </div>
                                <p>Seguir</p>

                            </div>

                            <div class="sugestao-linha">
                                <div>
                                    <img src="./assets/img/D_LucasFilm.png" alt="" />
                                        <div>
                                            <h1>luck_imyourfather</h1>
                                            <h2>Novo no Instagram</h2>
                                        </div>
                                </div>
                                <p>Seguir</p>

                            </div>

                            <div class="sugestao-linha">
                                <div>
                                    <img src="./assets/img/E_Disney.png" alt="" />
                                        <div>
                                            <h1>wdw</h1>
                                            <h2>Segue você</h2>
                                        </div>
                                </div>
                                <p>Seguir</p>

                            </div>

                            <div class="sugestao-linha">
                                <div>
                                    <img src="./assets/img/F_Universal.jpg" alt="" />
                                        <div>
                                            <h1>universalmovies</h1>
                                            <h2>Segue você</h2>
                                        </div>
                                </div>
                                <p>Seguir</p>
                            </div>
                        </div>

                        <div class="info">
                            <p>
                                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                                <br/>
                                <br/>
                                © 2021 INSTAGRAM DO FACEBOOK
                            </p>
                        </div>

                    </div>

                </div>

                {/* 3 - BARRA INFERIOR MOBILE*/}

                <div class="base mobile">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

            </div>

        </div>
    );

}