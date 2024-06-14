import './blog.css';

import { AuthorDetails } from '../author-details/author-details';

export function Blog({ username = "Username", date = "12th June 2024", summary=("This is the blog summary") }){
    return (
        <div className='blog-container'> 
            <h4>Blog Title</h4>
            <hr></hr>
            <div>
                {summary}
            </div>
            <AuthorDetails />
        </div>
    )
}

