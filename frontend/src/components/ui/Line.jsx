export function HR(props) {
    const { children } = props;
    return (
        <div {...props} className='w-full border-t-[0.5px] border-accent relative'>
            {children && <span className='text-accent font-light absolute w-fit h-fit m-auto inset-0 bg-background
            px-3 py-1'>{children}</span>}
        </div>
    );
}