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

    function Story({img, user}) {

        return (
            <div className="story">
                <img src="./assets/img/stories_background.jpg" alt=""/>
                <img src={img} alt=""/>
                <p>{user}</p>
            </div>
        )
    }

    return (

        <div className="stories">

            {stories.map((story, index) => <Story key = {index} img = {story.img} user = {story.user}/>)}

            <div className="botao">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

        </div>
    )
}