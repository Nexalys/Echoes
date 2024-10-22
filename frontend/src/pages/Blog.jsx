import React, { useState } from "react";

import { Icon } from "../components/ui/Icon";
import { HR } from "../components/ui/Line";
import { BlogCard, BlogListItem, BlogAuthor, BlogList } from "../components/Blog";
import { SampleAvatar } from "../components/ui/Profile";
import { Tooltip, TooltipWrapper } from "../components/ui/Tooltip";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useTheme } from "next-themes";

export default function Blog({titles = ["Main Title", "Main Title", "Main Title", "Main Title", "Main Title"]}) {
    const [selected, setSelected] = useState(0)
    return (
        <div>
            <div className="w-[100%] h-[3px]">
                <div className="bg-accent w-[60%] h-[100%]">
                </div>
            </div>

            <section className="shadow-main rounded-2xl p-[10px] mt-[50px] flex flex-row justify-start gap-[4%]">

                <div className="flex place-content-center shadow-main rounded-2xl h-fit w-[82%] mb-10">
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
                            source="### Hello this is markdown text hello this is another line"


                            className='rounded-xl py-[10px] h-full bg-background text-text mb-20'
                            wrapperElement={{
                                "data-color-mode": useTheme().resolvedTheme
                            }}
                        />
                    </div>
                </div>

                <div className=" flex flex-col gap-7 py-10 w-[14%] pr-5 mr-5 justify-center items-start h-fit shadow-main rounded-2xl  border-accent ">
                    {titles.map((title, index) => (
                        <div className="h-fit flex flex-row gap-1 items-center">
                            {selected == index+1 ? <div className=" h-[40px] w-[6px] bg-accent"></div>: <div></div>}
                            <a key={index} href="#" className={`ml-5 underline text-xl transition-reg ${selected == index+1 ? 'text-accent': 'text'}`} onClick={() => setSelected(index + 1)}>
                                {title}
                            </a>
                        </div>
                    ))}
                </div>
            </section>



            <section className="mt-[50px] p-10 shadow-main rounded-2xl grid-cols-2">
                <h1 className="text-4xl py-10">More from <span className="text-accent text-5xl">Username</span></h1>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[15px] h-[500px] overflow-scroll">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </section>

            <section className="mt-[50px] p-10 shadow-main rounded-2xl grid-cols-2">
                <h1 className="text-4xl py-10">More on <span className="text-accent text-5xl">This Topic</span></h1>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[15px]  h-[500px] overflow-scroll">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </section>
        </div>

    )
}