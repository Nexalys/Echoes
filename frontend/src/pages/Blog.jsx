import React from "react";

import { Icon } from "../components/ui/Icon";
import { HR } from "../components/ui/Line";
import { BlogListItem, BlogAuthor, BlogList } from "../components/Blog";
import { SampleAvatar } from "../components/ui/Profile";
import { Tooltip, TooltipWrapper } from "../components/ui/Tooltip";
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Blog(props) {
    return (
        <section>
            <div className="w-[100%] h-[3px]">
                <div className="bg-accent w-[60%] h-[100%]">
                </div>
            </div>

            <div className="flex place-content-center shadow-main h-[900px] w-[70%] my-10">
                <div className="w-[80%]">

                    <div className="flex mt-[100px] justify-between items-start">
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
                </div>

                <MarkdownPreview
                        // source= "hello"
                        // className='rounded-xl shadow-main p-[100px] h-full bg-background text-text'
                        // wrapperElement={{
                        //     "data-color-mode": useTheme().resolvedTheme
                        // }}
                    />

            </div>

        </section>
    )
}