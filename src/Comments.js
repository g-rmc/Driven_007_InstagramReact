import React from 'react';

export default function Comments(props) {

    const [like, setLike] = React.useState(false);

    return (
        <div>
            <div>
                <img src={props.img} />
                <h1>{props.name}</h1>
                <p>{props.text}</p>
            </div>
            {like === true ?
                <ion-icon name="heart" class='md hydrated red' onClick={() => setLike(!like)}></ion-icon> :
                <ion-icon name="heart-outline" class='md hydrated black' onClick={() => setLike(!like)}></ion-icon>
            }
        </div>

    )
}