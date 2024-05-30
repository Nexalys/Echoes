import './profile-picture.css';

export function ProfilePicture({size='small'}) {
    return (
        <div className={`profile-picture-container ${size}-pfp`}>
            <img src='https://i.pinimg.com/564x/74/5c/e7/745ce700e51c7112bce1213c2a61ddfa.jpg'/>
        </div>
    )
}