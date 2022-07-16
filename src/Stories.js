import Story from './Components/Story';

export default function Stories() {

    const stories = [   {img:'./assets/img/1_Hermione.jpg', user:'Hermione'},
                        {img:'./assets/img/2_Mickey.jpg', user:'Mickey'},
                        {img:'./assets/img/3_Shrek.jpg', user:'Shrek'},
                        {img:'./assets/img/4_Dory.jpg', user:'Dory'},
                        {img:'./assets/img/5_JackSkellington.jpg', user:'Jack'},
                        {img:'./assets/img/6_Malevola.jpg', user:'Malévola'},
                        {img:'./assets/img/7_Stitch.jpg', user:'Stitch'},
                        {img:'./assets/img/8_BnL.jpg', user:'BnL'}
    ];

    return (

        <div class="stories">

            {stories.map(Story)}

            <div class="botao">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

        </div>
    )
}