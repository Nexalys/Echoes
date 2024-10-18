import { Icon } from "./Icon.jsx";

export function SearchBar(props) {
    return (
        <div className='flex gap-2 items-center rounded-full px-5 py-2 border-[0.5px] border-accent w-[600px] shadow-sub'>
            <Icon name='Search' className='text-accent' />
            <input
                type='text'
                className='bg-transparent px-2 py-1 placeholder:text-accent placeholder:italic focus:outline-none w-full'
                placeholder='Serach'
                {...props}
            />
        </div>
    );
}