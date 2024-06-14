import BlogImage from '../../../public/assets/blog-preview.jpeg'
import './blog.css';

import { AuthorDetails } from '../author-details/author-details';

export function Blog({ username = "Username", date = "12th June 2024", summary=("This is the blog summary"), subject='Subject' }){
    return (
        <div className='blog-container'> 
            <div className='blog-info'>
                <h4>Blog Title</h4>
                <span className='line'></span>
                <div className='blog-summary'>
                    {summary}
                </div>
                <div className='auth-deets'><AuthorDetails /></div>
            </div>
            <div className='blog-pictures'>
                <div className='blog-image-container'>
                    <img src={BlogImage} />
                </div>
                <div className='blog-icons'>
                    <span className='blog-subject'>
                        {subject}
                    </span>
                    <span className='icons'>
                        <i class="fa-solid fa-circle-minus"></i>
                        <i class="fa-regular fa-bookmark"></i>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

