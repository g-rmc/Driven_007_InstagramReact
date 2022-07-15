export default function Head() {

    return (

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

    )
}