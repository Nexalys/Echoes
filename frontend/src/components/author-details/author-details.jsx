import './author-details.css';
import { ProfilePicture } from '../profile-picture/profile-picture';

export function AuthorDetails({ username='Username', date='12 Jun 2024' }) {
    return (
        <div className='author-details'>
            <ProfilePicture size='really-small'/>
            {username} 
            •
            {date}
        </div>
    )

}