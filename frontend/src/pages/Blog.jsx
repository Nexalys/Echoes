import React, { useState, useEffect, useRef} from "react";

import { Icon } from "../components/ui/Icon";
import { HR } from "../components/ui/Line";
import { BlogCard, BlogCardSmall} from "../components/Blog";
import { SampleAvatar } from "../components/ui/Profile";
import { Tooltip, TooltipWrapper } from "../components/ui/Tooltip";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useTheme } from "next-themes";

export default function Blog({titles = ["Main Title", "Main Title", "Main Title", "Main Title", "Main Title"]}) {
    const [selected, setSelected] = useState(0)

    const [y, setY] = useState(0);
    const [totalY, setTotalY] = useState(0);
    const [scrollBarHeight, setScrollBarHeight] = useState('0%');

    const blogContentRef = useRef(null); 

    useEffect(() => {
        const blogContent = blogContentRef.current;
    
        const handleScroll = () => {
            const scrollTop = blogContent.scrollTop;
            const clientHeight = blogContent.clientHeight;
            const scrollHeight = blogContent.scrollHeight;
    
            if (scrollHeight <= clientHeight) {
                setScrollBarHeight('100%');
            } else {
                const totalScrollableHeight = scrollHeight - clientHeight;
                const scrollPercentage = (scrollTop / totalScrollableHeight) * 100;
                setScrollBarHeight(`${Math.max(scrollPercentage, 0.1)}%`);
            }
        };
    
        blogContent.addEventListener('scroll', handleScroll);
        
        handleScroll();
    
        return () => {
            blogContent.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div>
            <div className="flex rounded-2xl items-center w-[100%] h-[30px] sticky top-4 z-10">
                <div className='bg-accent h-[3px]' style={{ width: scrollBarHeight }}>
                </div>
            </div>

            <section className="shadow-main rounded-2xl p-8 mt-[20px] flex flex-row justify-start gap-[4%]">

                <div ref ={blogContentRef} className="blog-content flex place-content-center shadow-main rounded-2xl h-fit w-[82%] mb-10  max-h-[1589px] overflow-scroll">
                    <div className="w-[90%] h-fit">

                        <div className="flex mt-[100px] justify-between items-start ">
                            <h1 className="text-5xl font-bold w-[70%]">
                                The magic of negative space: where less is truly more.
                            </h1>

                            <div className="flex flex-row gap-[20px]">
                                <TooltipWrapper className='relative'>
                                    <Tooltip>
                                        View
                                    </Tooltip>
                                    <Icon name="Eye"
                                        className="text-accent hover:text-primary text-3xl cursor-pointer"
                                    />
                                </TooltipWrapper>


                                <TooltipWrapper className='relative'>
                                    <Tooltip>
                                        Bookmark
                                    </Tooltip>
                                    <Icon name="Bookmark"
                                        className="text-accent hover:text-primary text-3xl cursor-pointer"
                                    />
                                </TooltipWrapper>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[10px] my-[20px]">
                            <HR />
                            <div className="flex flex-row gap-[10px] justify-start items-center">
                                <SampleAvatar className='h-12 w-12 rounded-full ' />

                                <div className="flex flex-col place-content-center">
                                    <h1 className="text-3xl font-bold">Username</h1>
                                    <div className="flex place-content-center gap-2">
                                        <p>Published 12th June 2024</p> • <a href="" className="text-accent">Follow</a>
                                    </div>
                                </div>
                            </div>
                            <HR />
                        </div>

                        <MarkdownPreview
                            source="### Hello this is markdown text
                             hello this is another line
                             "
                            className='rounded-xl py-[10px] h-full bg-background text-text mb-20'
                            wrapperElement={{
                                "data-color-mode": useTheme().resolvedTheme
                            }}
                        />
                    </div>
                </div>

                <div className="sticky top-5 bottom-5 flex flex-col gap-4 py-10 w-[14%] pr-5 mr-0 justify-center items-start h-fit shadow-main rounded-2xl  border-l-2 border-accent ">
                    {titles.map((title, index) => (
                        <div className="h-[50px] flex flex-row gap-1 items-center">
                            {selected == index+1 ? <div className=" h-full w-[4.5px] bg-accent"></div> : <div></div>}
                            <a key={index} href="#" className={`ml-5 underline text-xl reg-transition ${selected == index+1 ? 'text-accent': 'text'}`} onClick={() => setSelected(index + 1)}>
                                {title}
                            </a>
                        </div>
                    ))}
                </div>

            </section>



            <section className="mt-[50px] p-10 shadow-main rounded-2xl grid-cols-2">
                <h1 className="text-4xl py-10">More from <span className="text-gradient text-5xl font-bold">Username</span></h1>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[15px] h-[500px] overflow-scroll">
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                </div>
            </section>

            <section className="mt-[50px] p-10 shadow-main rounded-2xl grid-cols-2">
                <h1 className="text-4xl py-10">More on <span className="text-gradient text-5xl font-bold">This Topic</span></h1>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[15px]  h-[500px] overflow-scroll">
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                </div>
            </section>
        </div>

    )
}