import {useState} from "react";

export function SegmentedControl(props) {
    const { segments } = props;
    const [ activeIndex , setActiveIndex ] = useState(0);

    return (
        <div className={`flex gap-0 rounded-full bg-text/10 w-fit ${props.className}`}>
            {segments.map((segment, ind) => (
                <div
                    key={ind}
                    className={`rounded-full px-4 py-2 reg-transition ${activeIndex === ind && 'before:w-full text-background'}
                    before:bg-accent before:h-full relative before:absolute before:inset-0 overflow-hidden before:z-[-1]
                    ${activeIndex !== ind && 'before:w-0'} before:transition-all before:duration-300 before:ease-in-out`}
                    onClick={() => setActiveIndex(ind)}
                >
                    {segment.label}
                </div>
            ))}
        </div>
    );
}