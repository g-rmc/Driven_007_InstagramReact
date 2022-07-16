export default function Story(props) {

    return (
        <div class="story">
            <img src="./assets/img/stories_background.jpg" />
            <img src={props.img} />
            <p>{props.user}</p>
        </div>
    )
}