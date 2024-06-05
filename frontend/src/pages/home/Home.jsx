import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { BlogList } from '../../components/sidebar-blog-list/sidebar-blog-list'
import { Blog } from '../../components/blog/blog'
import './Home.css';
export function Home(){
  return (
    <>
      <Navbar/>
    <div className='home-container'>
      <div className='home-sidebar-container'>
        <div className='home-sidebar-featured'>
            <h3>
                Featured
            </h3>
            <div  className='home-sidebar-blog-gap'>
                <BlogList/>
                <BlogList/>
                <BlogList/>
                <BlogList/>
            </div>
        </div>

        <div className='home-sidebar-topnews'>
            <h3>
                Top News
            </h3>
            <div className='home-sidebar-blog-gap'>
                <BlogList/>
                <BlogList/>
                <BlogList/>
                <BlogList/>
            </div>
        </div>
      </div>


      <div className='home-blog-container'>
        <h4 className='home-blog-heading'>
            Blogs chosen, just for you!
        </h4>
        <ul>
            <li><a href="#">For you</a></li>
            <li><a href="#">Following</a></li>
            <li><a href="#">Art</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Programming</a></li>
            <li><a href="#">Philosophy</a></li>
            <li><a href="#">Essays</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Wolrd Affairs</a></li>
            <li><a href="#">Politics</a></li>
            <li><a href="#">Geography</a></li>
            <li><a href="#">Math</a></li>
        </ul>
        <div className='home-blog-gap'>
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
      </div>
    </div>
    </>
  )
}


