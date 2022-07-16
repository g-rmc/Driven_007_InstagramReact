export default function Sidebar() {

    const perfil =[ {img:'./assets/img/A_Pixar.jpg', user:'pixar_real.oficial', name:'Pixar'}];
    
    const itens =[  {img:'./assets/img/B_Marvel.jpg', user:'marvete322', status:'Segue você'},
                    {img:'./assets/img/C_WarnerBros.png', user:'warner_bros', status:'Segue você'},
                    {img:'./assets/img/D_LucasFilm.png', user:'luck_imyourfather', status:'Segue você'},
                    {img:'./assets/img/E_Disney.png', user:'wdw42', status:'Segue você'},
                    {img:'./assets/img/F_Universal.jpg', user:'universalmovies', status:'Segue você'}
    ];

    return (

        <div class="container">

            <div class="barra-lateral">

                {perfil.map(props => (
                    <div class="perfil">
                        <img src={props.img} alt="" />
                        <div>
                            <h1>{props.user}</h1>
                            <h2>{props.name}</h2>
                        </div>
                    </div>
                ))}

                <div class="sugestao">

                    <div class="sugestao-topo">
                        <h1>Sugestões para você</h1>
                        <h2>Ver tudo</h2>
                    </div>

                    {itens.map(props => (
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
                    ))}

                </div>

                <div class="info">
                    <p>
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                        <br />
                        <br />
                        © 2021 INSTAGRAM DO FACEBOOK
                    </p>
                </div>
            </div>
        </div>
    )
}