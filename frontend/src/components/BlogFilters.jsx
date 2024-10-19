import { useState } from "react";
import {markdown} from "@codemirror/lang-markdown";

export function FilterOption(props) {
    const { info, globalStateManager } = props;
    const [ selected, setSelected ] = useState(info.selected);

    const handleFilterOptionClick = () => {
        setSelected(!selected);
        globalStateManager(selected);
    };

    return (
        <span
            className={`text-accent px-4 py-1 rounded-full whitespace-nowrap ${selected && 'text-background bg-accent'} reg-transition`}
            onClick={handleFilterOptionClick}
        >
            {info.subject}
        </span>
    )
}

export function Filters(props) {
    const { children } = props;

    return (
        <div className='flex gap-3 overflow-auto filter-list dual-mask px-6'>
            {children}
        </div>
    );
}

