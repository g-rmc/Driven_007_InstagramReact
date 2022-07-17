export default function Video(props) {

    return (<div class="post-video">
        <video controls autoplay>
            <source src={props.midia1} type="video/mp4" />
            <source src={props.midia2} type="video/ogg" />
            Seu navegador não suporta vídeos
        </video>
    </div>)
};