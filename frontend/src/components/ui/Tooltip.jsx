export function Tooltip({ children, position = 'bottom' }) {
    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    const arrowClasses = {
        top: 'bottom-[-4px] left-1/2 -translate-x-1/2',
        bottom: 'top-[-4px] left-1/2 -translate-x-1/2',
        left: 'right-[-4px] top-1/2 -translate-y-1/2',
        right: 'left-[-4px] top-1/2 -translate-y-1/2',
    };

    return (
        <div className={`absolute opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            w-max max-w-xs
            bg-primary text-white
            px-3 p-1 rounded-full
            text-[0.7rem] z-20
            transition-all duration-300 ease-in-out
            ${positionClasses[position]}`}
        >
            {children}
            <span className={`
                  absolute w-2 h-2
                  bg-primary
                  transform rotate-45
                  ${arrowClasses[position]}
                `}
            />
        </div>
    );
}

export function TooltipWrapper(props) {
    const {children, className} = props;

    return (
        <div className={`relative w-fit h-fit group ${className}`}>
        {children}
        </div>
    );
}