import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

import { Navbar } from '../../components/navbar/navbar';
import { ProfilePicture } from '../../components/profile-picture/profile-picture';
import { Blog } from "../../components/blog/blog.jsx";
import { Blogsmall } from "../../components/blog-small/blog-small.jsx";

import './blogPage.css';

export function BlogPage({ blogTitle = "Blog Title", text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias pariatur commodi assumenda blanditiis debitis, sapiente iusto dignissimos, dolores ipsa esse soluta optio repellat accusamus tempora accusantium ducimus dolore in aliquam ipsum provident. Totam optio impedit minima dolore possimus consequuntur expedita perferendis aspernatur fuga debitis qui sunt ullam odio assumenda, architecto quasi voluptatum reiciendis laudantium. Perspiciatis ullam dolores labore unde quae. Quo aperiam natus tempora numquam sunt perspiciatis suscipit doloribus expedita doloremque! Magni illum quam maxime, architecto esse minima corporis. Itaque, numquam optio. Doloremque impedit qui dolorum voluptas veniam esse illo, sapiente quasi velit debitis. Molestias provident totam, libero iure odit dolore cupiditate pariatur sunt repellat earum necessitatibus nisi assumenda consequuntur recusandae, id iusto itaque magnam quasi quis laboriosam nemo. Cumque maxime porro veniam dolor dignissimos eaque nostrum molestiae, nemo consectetur quidem? Alias, mollitia. Totam similique dicta ipsa dolorum mollitia perspiciatis maxime ut omnis sequi earum eveniet aliquam blanditiis ipsum atque, necessitatibus illo ad eligendi reiciendis fugiat eius tempore consectetur illum explicabo! Ratione cupiditate sunt alias error, sapiente aperiam quod corrupti. Iusto velit, ut ab iure animi nam deleniti eaque quibusdam doloribus aperiam. A culpa consectetur animi nam dignissimos voluptatem, odio tenetur, maxime vitae, nisi suscipit sit! Sint nemo, blanditiis quia alias totam unde expedita ea dicta, aliquid similique impedit laudantium necessitatibus culpa, eligendi qui sed nulla temporibus quisquam rem sit. Iste minima sunt, nobis optio quisquam error est, rem rerum quibusdam maxime architecto dolores eius eos labore, eaque inventore omnis accusamus cupiditate facilis. Aperiam voluptates, illo, incidunt minima pariatur blanditiis eligendi ad, possimus harum ullam necessitatibus nobis! Optio laboriosam nam tempora ad, deleniti quas eos corrupti dolore ipsum repudiandae dicta enim molestiae veritatis qui ducimus voluptas, sit quod voluptatem alias. Nisi nulla sit necessitatibus eos debitis! Nesciunt laboriosam, incidunt atque laudantium quod odio accusantium facilis voluptates ut. Totam corrupti laborum autem sit adipisci consequuntur, labore repudiandae excepturi saepe. Enim aperiam assumenda aliquam illum labore veniam explicabo consequuntur odit consequatur. In optio rem recusandae a quas nesciunt, architecto nemo veniam beatae iure sapiente dolores eos officiis harum quam maiores, totam assumenda necessitatibus id sit repudiandae unde amet excepturi! Voluptas delectus, minima, illum natus doloremque voluptate ducimus, possimus nostrum cum eius repellendus dolores hic rerum. Nisi neque voluptates sed sit ipsa dolorum, odit, facere cumque quas minima velit provident facilis illum! Ullam voluptates consectetur nostrum, deserunt provident velit fugiat ducimus aspernatur nemo commodi sapiente soluta earum assumenda, eveniet ea cum amet numquam. Esse cum, at doloremque cumque nulla quos totam repellat a est accusamus iure id illum, aut mollitia eaque nihil minima. Quibusdam non saepe modi, molestias iste quos doloremque debitis, sit aspernatur, odio ducimus velit? Deserunt qui nostrum necessitatibus minima ut eveniet dignissimos asperiores quisquam architecto corporis totam animi laudantium facilis odio ipsum ipsam, quia sit excepturi non adipisci ad distinctio! Laborum animi voluptate voluptates vel explicabo, vitae doloribus alias neque nulla quod laudantium quas aliquam sunt ut cumque autem quae deserunt corrupti incidunt adipisci iusto. Labore consequatur praesentium totam similique rerum dignissimos debitis numquam. Omnis pariatur dolorum, quas autem itaque consequuntur excepturi voluptas. Delectus rerum dolor odio, reprehenderit vitae exercitationem quibusdam sunt dicta officia eius incidunt aut asperiores veritatis iste doloribus sequi natus quia maiores veniam quos? Expedita officia consequatur fuga eius nihil inventore quo, tempore sapiente debitis similique porro corrupti, dolorum nostrum odio reprehenderit neque dolore molestiae praesentium, dolores reiciendis architecto. Praesentium accusantium eveniet soluta? Tempore optio ducimus quibusdam omnis non explicabo, harum corrupti provident, quasi soluta blanditiis quaerat temporibus! Ab provident eaque animi quam, aut natus quo hic magnam, quae molestias voluptate facilis in nihil, facere distinctio soluta expedita? Veniam deleniti vitae corporis corrupti molestias facere rerum enim porro cupiditate officiis expedita commodi sapiente dicta dolore inventore id fuga, ab, repudiandae alias, sint quibusdam. Ratione quaerat tempore nemo dolorem repudiandae rerum officiis sit. Recusandae ab tempore fuga dolore ullam culpa corrupti distinctio. Ipsa quia quaerat ratione delectus minima autem est, harum beatae ipsum unde, illum sapiente, exercitationem alias nostrum ullam sequi assumenda voluptatum velit repudiandae dignissimos quos. Quis, ad? Tenetur, soluta recusandae at velit fuga molestiae assumenda explicabo hic labore, excepturi veritatis maiores eveniet nesciunt voluptas maxime eligendi quasi tempora optio commodi. Hic, dolore similique obcaecati, optio praesentium dolores nam quod blanditiis dolorem exercitationem quas sapiente reiciendis nulla temporibus, quam deleniti? Necessitatibus inventore obcaecati libero ex tempore voluptates. Libero incidunt veritatis ipsa, officiis quidem nesciunt mollitia veniam ea numquam aliquid eaque eligendi magnam quia unde, in voluptatibus quae laudantium ad, qui odit molestiae fuga nihil laborum repellat. Perspiciatis, aspernatur! Amet, maiores excepturi? Iure harum quisquam cumque quis eius molestiae quasi nihil cum, molestias nostrum expedita est corporis cupiditate quaerat alias nemo eum corrupti nesciunt asperiores magnam? Necessitatibus qui quidem illo aliquid hic explicabo deserunt facere consequuntur nam quam ipsum quaerat cumque voluptates est at, alias mollitia, exercitationem quisquam, repellendus doloremque eligendi suscipit magni nostrum. Unde distinctio aliquam obcaecati, soluta itaque ullam numquam voluptas in ut nemo ab sequi dolorem voluptatum, laudantium pariatur, beatae dolores sed laboriosam quos sunt et ducimus esse deleniti? Earum explicabo a ratione consequuntur, autem sint incidunt officia ipsa tenetur doloribus mollitia officiis totam quam tempora esse distinctio reiciendis praesentium inventore quaerat facilis. Quidem earum numquam tempora veniam, nesciunt aspernatur eveniet provident, deleniti magnam iusto voluptatem perspiciatis tempore inventore omnis est sunt dolore nisi. Repudiandae fugiat dolorum, voluptas possimus aliquid vel tenetur laborum expedita veniam quas cupiditate quaerat, nisi cumque dicta autem reprehenderit vero quae voluptates officiis quos velit consequatur aperiam dolor! Officiis itaque ea assumenda exercitationem soluta voluptates veniam! Molestiae reiciendis necessitatibus optio natus! Debitis nisi ratione praesentium atque nobis at, molestiae dignissimos eum, explicabo earum cupiditate maxime fuga reiciendis enim voluptatem dicta repellendus aperiam ipsam architecto esse fugiat omnis! Nisi perferendis facilis in cumque ratione eveniet quidem magni, quos voluptas, omnis culpa repellat ducimus similique consectetur aliquam repudiandae sequi impedit sunt molestias quasi aperiam. Quaerat cum ab impedit ipsam cumque! Cumque quidem maxime laborum placeat, maiores, magni dignissimos perspiciatis expedita voluptates sapiente ducimus aut distinctio unde fugit error accusantium saepe adipisci, optio asperiores vero suscipit architecto? Excepturi veniam molestiae totam dolorem eligendi fugit!", rightSidebarOptions = ["Main title", "Main title", "Main title", "Main title", "Main title", "Main title", "Main title", "Main title", "Main title"], username = "Username", date = "12th Jun 2024" }) {
    const [blogSeekerWidth, setBlogSeekerWidth] = useState("0%");

    useEffect(() => {
        const blogContent = document.querySelector('.blog-content');

        const checkScroll = () => {
            const scrollHeight = blogContent.scrollHeight;
            const clientHeight = blogContent.clientHeight;
            if (scrollHeight > clientHeight) {
                setBlogSeekerWidth("0%");
            } else {
                setBlogSeekerWidth("100%");
            }
        };

        const handleScroll = () => {
            const scrollTop = blogContent.scrollTop;
            const scrollHeight = blogContent.scrollHeight - blogContent.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            setBlogSeekerWidth(`${scrollPercentage}%`);
        };

        checkScroll();
        blogContent.addEventListener('scroll', handleScroll);

        return () => {
            blogContent.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
    return (
        <div>
            <Navbar />
            <div className='blog-page-container'>
                <div className='blog-seeker'>
                    <div className='blog-seeker-marker' style={{ width: blogSeekerWidth }}></div>
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
                            <hr />
                            <div className='profile-pic'>
                                <ProfilePicture size='small' />
                                <div>
                                    <h5>{username}</h5>
                                    <div className='publish-details'>
                                        <p>Published {date} &nbsp; ▪️<a>Follow</a></p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='blogpage-markdown-container'>
                            <Markdown>{markdown}</Markdown>
                        </div>
                    </div>
                    <div className='blog-right-side'>
                        <div className='blog-right-sidebar'>
                            <ul>
                                {rightSidebarOptions.map((option, index) => (
                                    <li key={index} className={`element ${index}`} onClick={() => handleClick(index)}>{option}</li>
                                ))}
                            </ul>

                        </div>
                        <div className='balloony'>
                            {/* <img src={balloon} /> */}
                        </div>
                    </div>
                </div>


                <div className='blogpage-blog-username-container'>
                    <div className='blogpage-blog-username-text'>
                        <h3>More From </h3> <h2>&nbsp;Username</h2>
                    </div>
                    <div className='blogpage-blog-username'>
                        <Blogsmall />
                        <Blogsmall />
                        <Blogsmall />
                        <Blogsmall />
                        <Blogsmall />
                    </div>
                </div>


                <div className='blogpage-blog-username-container'>
                    <div className='blogpage-blog-username-text'>
                        <h3>More On </h3> <h2>&nbsp;This Topic</h2>
                    </div>
                    <div className='blogpage-blog-username'>
                        <Blogsmall />
                        <Blogsmall />
                        <Blogsmall />
                        <Blogsmall />
                        <Blogsmall />
                    </div>
                </div>
            </div>
        </div>
    );
}
