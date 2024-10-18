import { useState, useEffect } from "react";

export function ToggleButton(props) {
    const { falseState, trueState, setFunc, state, children } = props;
    const initialState = state === trueState;
    const [ active, setActive ] = useState(initialState);

    setFunc(active ? trueState : falseState);

    return (
        <div
            className={`w-[60px] aspect-[2/1] rounded-full relative shadow-sub 
            ${!active && 'bg-text/30'} ${active && 'bg-accent/80'} ${props.className}`}
             onClick={() => setActive(!active)}
        >
            <div
                className={`aspect-square w-[50%] absolute rounded-full top-0 bottom-0 my-auto bg-background scale-[0.8]
                ${!active && 'translate-x-0'} ${active && 'translate-x-full'} reg-transition flex justify-center items-center`}
            >
                {children}
            </div>
        </div>
    );
}