import { Navbar } from '../../components/navbar/navbar'
import { Blog } from '../../components/blog/blog'
import './page.css';

export function Homepage() {
    return (
        <div className='homepage-container'>
            <Navbar />
            <Blog />
        </div>

    )
}