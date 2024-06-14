import { Navbar } from '../../components/navbar/navbar'
import { Blog } from '../../components/blog/blog'
import { List } from '../../components/list/list'


import './page.css';
export function Homepage() {
    return (
        <div className='homepage-container'>
            <Navbar />
            <div className='homepage-blogs'>
                <div className='homepage-featured'>

                </div>
                <div className='homepage-main'>
                    <div>
                        <h3>Blogs Chosen Just For You!</h3>
                        <List />
                    </div>
                    <Blog />
                </div>
            </div>
        </div>
    )
}