import Markdown from 'react-markdown'

// import balloon from '../../../public/assets/balloon.svg'

import { Navbar } from '../../components/navbar/navbar'
import { ProfilePicture } from '../../components/profile-picture/profile-picture'

import './blogPage.css'

export function BlogPage( {width = "60%", blogTitle = "Blog Title", text = 'This is blog content using *markdown*', rightSidebarOptions = ["Main title", "Main title", "Main title", "Main title", "Main title", "Main title", "Main title", "Main title", "Main title"], username = "Username", date = "12th Jun 2024"}){
    const blogseekerstyle = {
        width: width
    }

    const handleClick = (index) => {
        const elements = document.querySelectorAll('.blog-right-sidebar .element');
        elements.forEach((el, i) => {
          if (i === index) {
            el.classList.add('selected-ele');
          } else {
            el.classList.remove('selected-ele');
          }
        });
    };

    const markdown = text;
    return(
        <div>
            <Navbar/>
            <div className='blog-page-container'>
                <div className='blog-seeker'>
                    <div className='blog-seeker-marker' style={blogseekerstyle}></div>
                </div>

                <div className='blog-content-container'>
                    <div className='blog-content'>
                        <div className='title-container'>
                            <h1>{blogTitle}</h1>
                            <div className='icons'>
                                <div className='eye icon'>
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        >
                                        <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                                    </svg>
                                </div>

                                <div className='banner icon'>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1em"
                                        width="1em"
                                        >
                                        <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
                                        </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className='author-detail-container'>
                        <hr/>
                            <div className='profile-pic'>
                                <ProfilePicture size='small'/>
                                <div>
                                <h5>Username</h5>
                                <div className='publish-details'>
                                    <p>Published {date}▪️ <a>Follow</a></p>
                                </div>
                                </div>
                            </div>
                        <hr/>
                        </div>
                        
                        <Markdown>{markdown}</Markdown>
                    </div>
                    <div className='blog-right-side'>
                        <div className='blog-right-sidebar'>
                            <ul>
                                {rightSidebarOptions.map((option, index) => (
                                    <li key={index} className={`element ${index}`} onClick={()=>handleClick(index)}>{option}</li>
                                ))}
                            </ul>

                        </div>
                        <div className='balloony'>
                            {/* <img src={balloon} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}