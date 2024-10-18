import { useNavigate } from 'react-router-dom';
import './profile-picture.css';

export function ProfilePicture({ size = 'small' }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };

    return (
        <div className={`profile-picture-container ${size}-pfp`} onClick={handleClick}>
            <img src='../../../public/assets/pfp.jpeg' alt='Profile' />
        </div>
    );
}
