import { Navbar } from '../../components/navbar/navbar'
import { Blog } from '../../components/blog/blog'
import { List } from '../../components/list/list'
import { BlogList } from '../../components/sidebar-blog-list/sidebar-blog-list';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { blogsRef } from '../firebase';
import { getDocs, query, orderBy, limit } from 'firebase/firestore';

import './page.css';
export function Homepage() {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    // const data = useParams();
    // const location = useLocation();
    // const data = location.state;
    // const username = data?.username;

    async function getAllBlogs() {
        try {
            const blogData = await getDocs(blogsRef);
            const filteredData = blogData.docs.map((doc) => ({
                ...doc.data()
            }))
            setBlogs(filteredData)
        }
        catch (err) {
            console.log("Error: ", err)
        }
    }

    async function getFeaturedBlogs() {
        try {
            const q = query(blogsRef, orderBy("view_count"), limit(4));
            const featuredBlogs = await getDocs(q);
            const data = featuredBlogs.docs.map((doc) => ({
                ...doc.data()
            }))
            setFeaturedBlogs(data);
        } catch (err) {
            alert("error: ", err);
        }
    }

    useEffect(() => {
        getAllBlogs();
        getFeaturedBlogs();
    }, []);



    return (
        <div className='homepage-container'>
            <Navbar />
            <div className='homepage-blogs'>
                <div className='homepage-sidebar'>
                    <div className='homepage-sidebar-featured'>
                        <h3>Featured</h3>
                        <div className='homepage-sidebar-bloglist'>
                            {featuredBlogs.map((blog) => {
                                console.log("Blog: ", blog)
                                return (
                                    <BlogList title={blog.blog_title} />
                                )
                            })}
                            {/* <BlogList />
                            <BlogList />
                            <BlogList />
                            <BlogList /> */}
                        </div>
                    </div>
                    <div className='homepage-sidebar-topnews'>
                        <h3>Top News</h3>
                        <div className='homepage-sidebar-bloglist'>
                            <BlogList />
                            <BlogList />
                            <BlogList />
                            <BlogList />
                        </div>
                    </div>
                </div>
                <div className='homepage-main'>
                    <div>
                        <h3>Blogs Chosen Just For You!</h3>
                        <List />
                    </div>
                    {blogs.map((blog) => {
                        console.log()
                        return (
                            <Blog title={blog.blog_title} summary={blog.blog_summary} subject={blog.blog_subject} />
                        )
                    })}

                    {/* <Blog />
                    <Blog />
                    <Blog />
                    <Blog /> */}
                </div>
            </div>
        </div>
    )
}