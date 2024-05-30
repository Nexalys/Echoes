import { NewButton } from '../button/button';
import { ProfilePicture } from '../profile-picture/profile-picture';
import { Input } from '../input/input'
import './navbar.css';

export function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-first-half'>
                <div className='navbar-logo-section'>
                    <div className='logo-placeholder'>

                    </div>
                    <h3 className='logo'>ECHOES</h3>
                </div>
                <Input placeholder='Search' />
            </div>
            <div className='navbar-second-half'>
                <NewButton />
                <ProfilePicture />
            </div>
        </nav>
    )
}