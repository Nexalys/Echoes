import { useState } from "react";

export function FilterOption(props) {
    const { info, globalStateManager } = props;
    const [ selected, setSelected ] = useState(info.selected);

    const handleFilterOptionClick = () => {
        setSelected(!selected);
        globalStateManager(selected);
    };

    return (
        <span
            className={`text-accent px-2 py-1 rounded-md whitespace-nowrap ${selected && 'text-background bg-accent'} reg-transition`}
            onClick={handleFilterOptionClick}
        >
            {info.subject}
        </span>
    )
}

export function Filters(props) {
    const { children } = props;

    return (
        <div className='flex gap-5 overflow-auto filter-list'>
            {children}
        </div>
    );
}