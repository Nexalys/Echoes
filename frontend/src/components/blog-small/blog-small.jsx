import './blog-small.css';


export function Blogsmall({username = "Username", date = "12th June 2024", url="https://i.pinimg.com/564x/74/5c/e7/745ce700e51c7112bce1213c2a61ddfa.jpg"}){

    return(
    <div className="Blog-s">
        <div className="left-content-s">
            <h4>Blog Title</h4>
            <hr />
            <div className="blog-content-s">
                <p>This is like a small portion of the blog. A trailer if you will. This is like a small portion of the blog. A trailer if you will.This is like a small portion of the blog. A trailer if you will. This is like a small portion of the blog. A trailer if you will.This is like a small portion of the blog. A trailer if you will. This is like a small portion of the blog. A trailer if you will.This is like a small portion of the blog. 
                   A trailer if you will. This is like a small portion of the blog. A trailer if you will.This is like a small portion of the blog. A trailer if you will. This is like a small portion of the blog. A trailer if you will.</p>
            </div>
            <div className="footer-s">
                <div className="profile-pic-s">
                    <img src={url}/>
                </div>
                <div className="author-s">
                    <p>{username} ▪️</p>
                </div>
                <div className="publishing-date-s">{date}</div>


                <div className='pinned-s hidden' >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="tabler:pinned-filled">
                                <path id="Vector" d="M14.6667 2.75C14.9003 2.75026 15.125 2.83972 15.2949 3.00011C15.4648 3.1605 15.567 3.37971 15.5807 3.61295C15.5944 3.84618 15.5185 4.07585 15.3686 4.25501C15.2186 4.43418 15.0059 4.54932 14.7739 4.57692L14.6667 4.58333V8.95033L16.4028 12.4236C16.4508 12.5186 16.4818 12.6213 16.4945 12.727L16.5 12.8333V14.6667C16.5 14.8912 16.4175 15.1079 16.2683 15.2757C16.1191 15.4435 15.9136 15.5506 15.6906 15.5769L15.5833 15.5833H11.9167V19.25C11.9164 19.4836 11.8269 19.7084 11.6666 19.8783C11.5062 20.0481 11.287 20.1504 11.0537 20.1641C10.8205 20.1778 10.5908 20.1019 10.4117 19.9519C10.2325 19.802 10.1173 19.5893 10.0898 19.3573L10.0833 19.25V15.5833H6.41667C6.19214 15.5833 5.97544 15.5009 5.80766 15.3517C5.63988 15.2025 5.53269 14.9969 5.50642 14.7739L5.5 14.6667V12.8333C5.50013 12.727 5.51874 12.6216 5.555 12.5217L5.59717 12.4236L7.33333 8.9485V4.58333C7.09969 4.58307 6.87497 4.49361 6.70508 4.33322C6.53519 4.17283 6.43295 3.95363 6.41926 3.72039C6.40557 3.48715 6.48145 3.25749 6.63141 3.07832C6.78137 2.89915 6.99408 2.78401 7.22608 2.75642L7.33333 2.75H14.6667Z" fill="#F64C46"/>
                            </g>
                        </svg><p>Pinned</p>
                </div>

                <div className='not-pinned-s '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4V10L7 14V16H17V14L15 10V4M12 16V21M8 4H16" stroke="#F64C46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
            </div> 
        </div>  
        <div className="right-content-s">
            <div className="blog-icon-pic-s">
                <div className="inner-circle-s">
                    <img src={url}/>
                </div>
            </div>
            <div className="bottom-box-s">
                <div className="subject-s">Subject</div>

                <div className="bookmark-s hidden">
                    <div className="remove-s">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="gg:remove">
                                <g id="Group">
                                    <path id="Vector" d="M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11H8Z" fill="#F64C46"/>
                                    <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" fill="#F64C46"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="saved-s">
                        
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 21V5C5 4.45 5.196 3.97933 5.588 3.588C5.98 3.19667 6.45067 3.00067 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V21L12 18L5 21Z" fill="#F64C46"/>
                        </svg>
                    
                    </div>
                </div>
                

                <div className="not-saved-s ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="material-symbols:bookmark-outline">
                            <path id="Vector" d="M3 23V3.44444C3 2.77222 3.238 2.19696 3.714 1.71867C4.19 1.24037 4.76152 1.00081 5.42857 1H17.5714C18.2393 1 18.8112 1.23956 19.2872 1.71867C19.7632 2.19778 20.0008 2.77304 20 3.44444V23L11.5 19.3333L3 23ZM5.42857 19.2722L11.5 16.6444L17.5714 19.2722V3.44444H5.42857V19.2722Z" fill="#F64C46"/>
                        </g>
                    </svg>

                </div>
            </div>
           
        </div>
    </div>
    )
}

export default Blogsmall;
