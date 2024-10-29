import { SampleAvatar } from "./ui/Profile.jsx";
import { useRef, useEffect, useState } from 'react';
import { HR } from "./ui/Line.jsx";
import { Icon } from "./ui/Icon.jsx";

export function BlogNavigator(props) {
    const { className, headerInfo, selectedLink } = props;

    return (
        <div className={`flex flex-col gap-2 sticky top-8 h-fit ${className}`}>
            {headerInfo.map(({header, link, rank}) => (
                <a key={link} href={link}>
                    <div
                        style={{paddingLeft: `${(rank-1)*25 + 20}px`}}
                        className={`${selectedLink === link && 'rounded-md text-accent bg-accent/20'} reg-transition py-4 pr-[20px]`}
                    >
                        {header}
                    </div>
                </a>
            ))}
        </div>
    );
}


export function BlogListItem(props) {
    const blogListItemRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (blogListItemRef.current) {
                setIsOverflowing(blogListItemRef.current.scrollWidth > blogListItemRef.current.clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    return (
        <div className='flex items-center gap-4 w-full group'>
            <SampleAvatar className='h-12 w-12 rounded-full' />
            <div className='flex-1 min-w-0 relative'>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <span>{props.username || 'Username'}</span>
                    <span>•</span>
                    <span>{props.date || '12 Jun 2024'}</span>
                </div>
                <h3
                    className='text-xl font-bold truncate'
                    ref={blogListItemRef}
                >
                    {props.title || "Blog Title"}
                </h3>
                {isOverflowing &&
                    <div className='absolute group-hover:inline-block reg-transition opacity-0
                    group-hover:opacity-100 top-full left-0 right-0 mx-auto w-fit text-sm bg-neutral-700
                    text-white py-1 px-2 rounded-sm z-20 before:h-[1rem] before:z-[-1] before:rotate-45
                    before:contents before:absolute before:bg-neutral-700 before:aspect-square before:bottom-[50%]
                    before:left-0 before:right-0 before:mx-auto'>
                        {props.title}
                    </div>
                }
            </div>
        </div>
    );
}

export function BlogAuthor() {
    return (
        <div className='flex gap-2 mt-auto'>
            <SampleAvatar className='h-8 w-8 rounded-full' />
            •
            <span>Username</span>
            •
            <span>12 Jun 2024</span>
        </div>
    )
}

export function BlogList(props) {
    return (
        <div className='flex flex-col gap-10 items-center w-full'>
            <h2 className='text-4xl text-accent font-bold'>{props.title || 'Title'}</h2>
            <div className='flex flex-col gap-10 w-[70%]'>
                {props.children}
            </div>
        </div>
    );
}

export function BlogCard(props) {
    return (
        <div className={`p-10 rounded-xl border-[0.5px] gap-[50px] border-accent shadow-main flex h-[350px] ${props.className || ''}`}>
            <div className='flex flex-col gap-6'>
                <h3 className='text-2xl font-bold'>
                    Blog Title Goes Here
                </h3>
                <HR />
                <p className='h-[100px] overflow-ellipsis overflow-y-auto scroll-style'>
                    This is like a small portion of the blog. A trailer if you will. This is like a small portion of the
                    blog. A trailer if you will.
                    This is like a small portion of the blog. A trailer if you will.This is like a small portion of...
                    This is like a small portion of the blog. A trailer if you will. This is like a small portion of the
                    blog. A trailer if you will.
                    This is like a small portion of the blog. A trailer if you will.This is like a small portion of...
                    This is like a small portion of the blog. A trailer if you will. This is like a small portion of the
                    blog. A trailer if you will.
                    This is like a small portion of the blog. A trailer if you will.This is like a small portion of
                </p>
                <div className='flex gap-2 mt-auto'>
                    <SampleAvatar className='h-8 w-8 rounded-full' />
                    •
                    <span>Username</span>
                    •
                    <span>12 Jun 2024</span>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div
                    className='w-[80%] aspect-square border-accent border-4 rounded-full p-2'
                >
                    <img
                        src='/public/SampleBlogImage.png'
                        className='rounded-full aspect-square object-cover h-full w-full'
                    />
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='bg-accent/30 px-5 py-2 rounded-full'>Subject</span>
                    <Icon name='CircleMinus' className='hover:text-accent reg-transition text-xl' />
                    <Icon name='Bookmark' className='hover:text-accent reg-transition text-xl' />
                </div>
            </div>
        </div>

    );
}


// This should have been a wrapper function
export function BlogCardSmall(props) {
    return (
        <BlogCard className='h-[90%]'/>
    );
}