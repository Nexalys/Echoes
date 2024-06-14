import './profile-picture.css';

export function ProfilePicture({size='small'}) {
    return (
        <div className={`profile-picture-container ${size}-pfp`}>
            <img src='../../../public/assets/pfp.png'/>
        </div>
    )
}