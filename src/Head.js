export default function Head() {

    return (

        <div className="topo">

            <div className="barra desktop">

                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div></div>
                    <img src="./assets/img/logo.png" alt=""/>
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="menus">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

            </div>

            <div className="barra mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./assets/img/logo.png" alt=""/>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

        </div>

    )
}