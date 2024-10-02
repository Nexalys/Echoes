import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import BlogImage from '../../../public/assets/blog-preview.jpeg';
import './blog.css';
import { AuthorDetails } from '../author-details/author-details';

export function Blog({title = ("Blog Title"), summary = ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia soluta suscipit minima facilis sequi quod quia itaque repudiandae laboriosam deleniti labore, magnam perspiciatis maxime aperiam fugit neque odio voluptas autem ut. Consequatur tenetur velit corrupti dolorum quidem aliquam voluptatibus, aperiam porro vitae ratione, magnam quisquam voluptatum fuga? Eligendi ea incidunt et illum expedita praesentium accusamus. Maxime animi tempore saepe aspernatur totam repellat placeat, illo, accusantium ab, reprehenderit fuga fugit labore voluptatem autem repudiandae porro in! Odit suscipit omnis adipisci molestias officia maiores ab explicabo a eum obcaecati itaque dolor eius impedit rerum ad aliquam, excepturi debitis voluptatum repellendus expedita?"), subject = 'Subject' }) {

    const [showTopMask, setShowTopMask] = useState(false);
    const [showBottomMask, setShowBottomMask] = useState(false);
    const summaryRef = useRef(null);
    const navigate = useNavigate();

    const handleBlogClick = () => {
        navigate('/blog', { state: { title, subject } });
      };

    useEffect(() => {
        const handleScroll = () => {
            if (summaryRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = summaryRef.current;
                const isScrollable = scrollHeight > clientHeight;
                const isAtTop = scrollTop > 0;
                const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // A small margin to handle precision issues

                setShowTopMask(isScrollable && isAtTop);
                setShowBottomMask(isScrollable && !isAtBottom);
            }
        };

        const element = summaryRef.current;
        element.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='blog-container' onClick={()=>handleBlogClick()}>
            <div className='blog-info'>
                <div>
                    <h4>{title}</h4>
                </div>
                <span className='line'></span>
                <div
                    className={`blog-summary ${showTopMask ? 'blog-mask-top' : ''} ${showBottomMask ? 'blog-mask-bottom' : ''}`}
                    ref={summaryRef}
                >
                    {summary}
                </div>
                <div className='auth-deets'>
                    <AuthorDetails />

                    <div className='blog-mediaquery-icons'>
                        <span className='blog-subject'>
                            {subject}
                        </span>
                        <span className='icons'>
                            <div className='blog-circle-icon'>
                                <i className="fa-solid fa-circle-minus"></i>
                            </div>

                            <div className='blog-bookmark-icon'>
                                <i className="fa-regular fa-bookmark"></i>
                            </div>
                        </span>
                    </div>


                </div>
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
                        <div className='blog-circle-icon'>
                            <i className="fa-solid fa-circle-minus"></i>
                        </div>

                        <div className='blog-bookmark-icon'>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
