import { Icon } from "../components/ui/Icon";
import { SampleAvatar } from "../components/ui/Profile";
import { BlogCard, BlogAuthor } from "../components/Blog.jsx";
import { Banner } from "../components/ui/Profile";

export default function Profile() {
    return (
        <section className="flex gap-10">
            <div className="shadow-main rounded-2xl flex flex-col justify-between items-center h-[95vh] w-[7%] p-10 sticky top-[2.5%]">
                <div className="flex flex-col gap-[90px]">
                    <Icon name="House" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    <Icon name="Bell" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    <Icon name="BookText" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    <Icon name="Bookmark" className='text-accent hover:text-primary cursor-pointer text-xl' />
                    <Icon name="SquarePen" className='text-accent hover:text-primary cursor-pointer text-xl' />
                </div>
                <SampleAvatar className='h-12 w-12 rounded-full' />
            </div>

            <div className="flex flex-col items-center w-[68%] px-1 box-border">
                <Banner/>
                <div className="self-start my-7">
                    <h1 className="text-5xl font-bold">Full Name</h1>
                </div>
                <div className="flex flex-col gap-10 grow ">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>

            <div className="shadow-main rounded-2xl flex flex-col items-center h-[95vh] w-[25%] p-10 sticky top-[2.5%]">
                <SampleAvatar className='h-[249px]  rounded-full' />
                <div className="flex flex-col items-center h-[498px] gap-7">

                    <div className="flex flex-col items-center justify-center gap-2">
                        <h4 className="font-bold text-4xl">Username</h4>
                        <h5 className="text-xl color: text-accent">11.1k followers</h5>
                    </div>

                    <p className="text-1xl mb-4">Tech enthusiast exploring the human side of innovation. Writing about the intersection of technology, culture, and society. Let's navigate this digital journey together.</p>

                    <div className="flex flex-col w-[100%] gap-5">
                        <h5 className="self-start text-3xl font-bold">Following</h5>
                        <BlogAuthor/>
                        <BlogAuthor/>
                        <BlogAuthor/>
                        <a href="see" className="self-start">see more(457)</a>
                    </div>

                </div>
            </div>
        </section>
    )
}