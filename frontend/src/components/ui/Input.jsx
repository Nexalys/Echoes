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

export function DoubleBorderInput(props) {
    const { placeholder, label, className } = props;

    return (
        <div className='rounded-full border-[0.5px] border-accent box-border h-fit p-2 w-full relative'>
            <span className='absolute top-[-0.9rem] left-[3rem] bg-background px-5 py-0'>
                {label}
            </span>
            <div className='rounded-full border-[0.5px] border-accent'>
                <input
                    {...props}
                    className={`py-3 bg-transparent focus:outline-none w-full transition-none px-4 ${className}`}
                    placeholder={placeholder || label}
                />
            </div>
        </div>
    );
}