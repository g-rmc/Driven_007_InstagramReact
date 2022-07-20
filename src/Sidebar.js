export default function Sidebar() {

    const perfil =[ {img:'./assets/img/A_Pixar.jpg', user:'pixar_real.oficial', name:'Pixar'}];
    
    const itens =[  {img:'./assets/img/B_Marvel.jpg', user:'marvete322', status:'Segue você'},
                    {img:'./assets/img/C_WarnerBros.png', user:'warner_bros', status:'Segue você'},
                    {img:'./assets/img/D_LucasFilm.png', user:'luck_imyourfather', status:'Segue você'},
                    {img:'./assets/img/E_Disney.png', user:'wdw42', status:'Segue você'},
                    {img:'./assets/img/F_Universal.jpg', user:'universalmovies', status:'Segue você'}
    ];

    function Perfil ({img, user, name}) {

        return (
            <div className="perfil">
            <img src={img} alt="" />
            <div>
                <h1>{user}</h1>
                <h2>{name}</h2>
            </div>
        </div>
        )
    }

    function Sugestao ({img, user, status}) {

        return (
            <div className="sugestao-linha">
            <div>
                <img src={img} alt="" />
                <div>
                    <h1>{user}</h1>
                    <h2>{status}</h2>
                </div>
            </div>
            <p>Seguir</p>
        </div>
        )
    }

    return (

        <div className="container">

            <div className="barra-lateral">

                {perfil.map((perfil, index) => <Perfil key = {index} img = {perfil.img} user = {perfil.user} name = {perfil.name}/>)}

                <div className="sugestao">

                    <div className="sugestao-topo">
                        <h1>Sugestões para você</h1>
                        <h2>Ver tudo</h2>
                    </div>

                    {itens.map((perfil, index) => <Sugestao key = {index} img = {perfil.img} user = {perfil.user} status = {perfil.status}/>)}

                </div>

                <div className="info">
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