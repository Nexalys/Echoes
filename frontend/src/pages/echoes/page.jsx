import { Navbar } from '../../components/navbar/navbar'
import { Blog } from '../../components/blog/blog'
import { List } from '../../components/list/list'
import { BlogList } from '../../components/sidebar-blog-list/sidebar-blog-list';

import './page.css';
export function Homepage() {
    return (
        <div className='homepage-container'>
            <Navbar />
            <div className='homepage-blogs'>
                <div className='homepage-sidebar'>
                    <div className='homepage-sidebar-featured'>
                        <h3>Featured</h3>
                        <div className='homepage-sidebar-bloglist'>
                            <BlogList/>
                            <BlogList/>
                            <BlogList/>
                            <BlogList/>
                        </div>
                    </div>
                    <div className='homepage-sidebar-topnews'>
                        <h3>Top News</h3>
                        <div className='homepage-sidebar-bloglist'>
                            <BlogList/> 
                            <BlogList/> 
                            <BlogList/> 
                            <BlogList/> 
                        </div>
                    </div>
                </div>
                <div className='homepage-main'>
                    <div>
                        <h3>Blogs Chosen Just For You!</h3>
                        <List />
                    </div>
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </div>
    )
}