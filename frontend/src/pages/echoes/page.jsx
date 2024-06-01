import { Navbar } from '../../components/navbar/navbar'
import { BlogFeature } from '../../components/blog-card/blog-card';
import './page.css';

export function Homepage() {
    return (
        <div className='homepage-container'>
            <Navbar />
            <BlogFeature />
        </div>
    )
}