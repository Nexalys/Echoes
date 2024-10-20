import { Icon } from "../components/ui/Icon";
import { SampleAvatar } from "../components/ui/Profile";
import { BlogCard, BlogAuthor, BlogListItem } from "../components/Blog.jsx";
import { Banner } from "../components/ui/Profile";
import { Tooltip, TooltipWrapper } from "../components/ui/Tooltip.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function Profile() {
    return (
        <section className="flex gap-10">
            <div
                className="shadow-main rounded-xl flex flex-col justify-between
                items-center h-[95vh] w-[7%] px-10 py-[100px] sticky top-[2.5%]"
            >
                <div className="flex flex-col gap-[90px]">
                    <TooltipWrapper className='relative'>
                        <Tooltip>
                            Home
                        </Tooltip>
                        <Icon name="House" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    </TooltipWrapper>
                    <TooltipWrapper>
                        <Tooltip>
                            Notification
                        </Tooltip>
                        <Icon name="Bell" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    </TooltipWrapper>
                    <TooltipWrapper>
                        <Tooltip>
                            Blog Lists
                        </Tooltip>
                        <Icon name="BookText" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    </TooltipWrapper>
                    <TooltipWrapper>
                        <Tooltip>
                            Bookmarks
                        </Tooltip>
                        <Icon name="Bookmark" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    </TooltipWrapper>
                    <TooltipWrapper>
                        <Tooltip>
                            Edit
                        </Tooltip>
                        <Icon name="SquarePen" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    </TooltipWrapper>
                </div>
                <TooltipWrapper>
                    <Tooltip position='top'>
                        Edit Profile
                    </Tooltip>
                    <SampleAvatar className='h-12 w-12 rounded-full' />
                </TooltipWrapper>
            </div>
            <div className="flex flex-col items-center gap-10 w-[68%] px-1 box-border">
                <div className='w-full h-[400px] rounded-xl overflow-hidden shadow-main'>
                    <Banner src='/public/SampleBannerImage.jpg'/>
                </div>
                <div className="self-start my-7">
                    <h1 className="text-5xl font-bold">Username's Recent Blogs:</h1>
                </div>
                <div className="flex flex-col gap-10">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <Button>
                        See All
                    </Button>
                </div>
            </div>
            <div className="shadow-main rounded-xl flex flex-col items-center
            justify-center h-[95vh] w-[25%] py-10 px-[80px] sticky top-[2.5%] gap-7">
                <SampleAvatar className='h-[25%] rounded-full'/>
                <div className='flex flex-col gap-4 items-center'>
                    <h3 className='text-3xl font-[600]'>Username</h3>
                    <Button type='primary'>
                        Follow
                    </Button>
                </div>
                <div className='flex gap-[80px]'>
                    <TooltipWrapper className='text-accent flex flex-col items-center text-xl'>
                        <Tooltip>
                            Followers
                        </Tooltip>
                        <Icon name='UserRound'/>
                        11.3k
                    </TooltipWrapper>
                    <TooltipWrapper className='text-accent flex flex-col items-center text-xl'>
                        <Tooltip>
                            Following
                        </Tooltip>
                        <Icon name='UserRoundPlus'/>
                        122
                    </TooltipWrapper>
                    <TooltipWrapper className='text-accent flex flex-col items-center text-xl'>
                        <Tooltip>
                            Blogs
                        </Tooltip>
                        <Icon name='NotebookPen'/>
                        107
                    </TooltipWrapper>
                </div>
                <div className='flex flex-col gap-4 self-start w-full'>
                    <h3 className='text-2xl font-[600]'>Favourite Authors:</h3>
                    <div className='flex flex-col gap-3 pl-8'>
                        <BlogAuthor/>
                        <BlogAuthor/>
                        <BlogAuthor/>
                        ...see all
                    </div>
                </div>
                <div className='flex flex-col gap-4 self-start w-full'>
                    <h3 className='text-2xl font-[600]'>Recent Bookmarks:</h3>
                    <div className='flex flex-col gap-3 pl-4'>
                        <BlogListItem/>
                        <BlogListItem/>
                        <BlogListItem/>
                        ...see all
                    </div>
                </div>
            </div>
        </section>
    )
}