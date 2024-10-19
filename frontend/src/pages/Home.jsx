import {BlogCard, BlogList, BlogListItem} from "../components/Blog.jsx";
import { Filters, FilterOption } from "../components/BlogFilters.jsx";
import { useState } from "react";
import { SegmentedControl } from "../components/ui/SegmentedControl.jsx";
import { HR } from "../components/ui/Line.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function Home() {
    const filterOptions = [
        {
            subject: "Art",
            selected: false,
        },
        {
            subject: "News",
            selected: false,
        },
        {
            subject: "Programming",
            selected: false,
        },
        {
            subject: "Philosophy",
            selected: false,
        },
        {
            subject: "Essays",
            selected: false,
        },
        {
            subject: "Research",
            selected: false,
        },
        {
            subject: "World Affairs",
            selected: false,
        },
        {
            subject: "Politics",
            selected: false,
        },
        {
            subject: "Geography",
            selected: false,
        },
        {
            subject: "Math",
            selected: false,
        },
    ]

    const [ filters, setFilters ] = useState(filterOptions);

    return (
        <section className='flex gap-[30px] relative'>
            <div className="flex flex-col w-[27%] py-[70px] gap-[70px] shadow-main
            rounded-xl h-[95vh] overflow-y-scroll sticky top-[2.5%]">
                <BlogList title={'Featured'}>
                    <BlogListItem/>
                    <BlogListItem title={'Random Title'}/>
                    <BlogListItem/>
                    <BlogListItem/>
                </BlogList>
                <BlogList title={'Top News'}>
                    <BlogListItem/>
                    <BlogListItem title={'Very long sample blog title to test elipses'}/>
                    <BlogListItem/>
                    <BlogListItem/>
                </BlogList>
            </div>
            <div className="flex flex-col w-[75%] gap-[60px] shadow-main rounded-xl p-[100px]">
                <div className="flex flex-col gap-8 w-[90%] self-center">
                    <div className='flex'>
                        <h2 className='text-4xl font-bold'>Blogs chosen just for you </h2>
                        <SegmentedControl
                            segments={[
                                {
                                    value: 'forYou',
                                    label: 'For You',
                                },
                                {
                                    value: 'following',
                                    label: 'Following',
                                }
                            ]}
                            className='ml-auto'
                        />
                    </div>
                    <HR/>
                    <Filters>
                        {filters.map((filter, ind) => (
                            <FilterOption
                                info={filter}
                                key={ind}
                                globalStateManager={(selected) => {
                                    setFilters((state) => {
                                        state[ind] = {...filter, selected: !selected};
                                        return state;
                                    });
                                }}
                            />
                        ))}
                    </Filters>
                </div>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <Button className='mx-auto'>Load more...</Button>
            </div>
        </section>
    )
}