import { Navbar } from '../../components/navbar/navbar'
import { Blog } from '../../components/blog/blog'
import { ProfilePicture } from '../../components/profile-picture/profile-picture'
import { BlogDescription } from '../../components/blog-description/BlogDescription'
import { AuthorDetails } from '../../components/author-details/author-details'
import { Blogsmall } from '../../components/blog-small/blog-small'
import { useState, useEffect } from 'react'
import { checkUser, getBlogsFromEmail, getUserDocumentFromUid } from '../firebase'

import homevector from '../../../public/assets/homevector.svg'
import notificationvecctor from '../../../public/assets/notificationvecctor.svg'
import bookmarkvector from '../../../public/assets/bookmarkvector.svg'
import createvector from '../../../public/assets/createvector.svg'
import blogvector from '../../../public/assets/blogs-icon.svg'
import profilepagemain from '../../../public/assets/profilepagemain.jpeg'

import './ProfilePage.css'

export function ProfilePage({ fullname = "Full Name", url = "https://i.pinimg.com/564x/74/5c/e7/745ce700e51c7112bce1213c2a61ddfa.jpg", username = "username", followers = "11.1k", description = "Tech enthusiast exploring the human side of innovation. Writing about the intersection of technology, culture, and society. Let's navigate this digital journey together." }) {
  const [user, setUser] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);
  // const username = data?.username;

  async function fetchUserBlogs(email) {
    const blogs = await getBlogsFromEmail(email);
    setUserBlogs(blogs);
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await checkUser();
        setUser(fetchedUser);

        await fetchUserBlogs(fetchedUser.email)

        const fullUser = await getUserDocumentFromUid(fetchedUser.uid)
        setUser(fullUser.document.data());
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    
    fetchUser();
    
  }, []);
  
  console.log("user: ", user)
  // console.log("blog data: ", userBlogs)


  return (
    <div>
      <Navbar />
      <div className='profilepage-container'>
        <div className='profilepage-left-sidebar'>
          <div className='profilepage-left-images'>
            <img src={homevector} alt="" className='profilepage-images' />
            <img src={notificationvecctor} alt="" className='profilepage-images' />
            <img src={blogvector} alt="" className='profilepage-images' />
            <img src={bookmarkvector} alt="" className='profilepage-images' />
            <img src={createvector} alt="" className='profilepage-images' />
          </div>
          <ProfilePicture className="profilepage-left-picture" />
        </div>


        <div className='profilepage-main'>
          <div className='profilepage-main-picture' >
            <img src={profilepagemain} alt="" />
          </div>
          <div className='profilepage-main-heading'>
            {/* <h2>{fullname}</h2> */}
            <h2>{user?.firstName} {user?.lastName}</h2>
            <h4>▪️▪️▪️</h4>
          </div>
          <div className='profilepage-main-blog-container'>
            
            { userBlogs.map((blog) => {
              return (
                <Blog title={blog.blog_title} summary={blog.blog_summary} subject={blog.blog_subject} />
              )
            })}
            {/* <Blog />
            <Blog />
            <Blog /> */}
          </div>
        </div>


        <div className='profilepage-right-sidebar'>
          <div className="profilepage-right-image-container">
            <img src='https://i.pinimg.com/564x/74/5c/e7/745ce700e51c7112bce1213c2a61ddfa.jpg' className="profilepage-right-image" />
            {/* <ProfilePicture size="large"/> */}
          </div>
          <div className='profilepage-right-content'>
            <h3>{user?.username}</h3>
            <h4>{user?.followers} Followers</h4>
            <p>{user?.description}</p>
            <div className='profilepage-right-following'>
              <h5>Following</h5>
              <div className='profilepage-right-authordetails'>
                <AuthorDetails />
                <AuthorDetails />
                <AuthorDetails />
                <AuthorDetails />
              </div>
              <a href="">see all (456)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
