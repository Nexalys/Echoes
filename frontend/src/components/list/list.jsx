import React, { useRef, useEffect, useState } from 'react';
import './list.css';

const sampleOptions = [
    'For you ',
    'Following ',
    'Art ',
    'News ',
    'Programming ',
    'Math ',
    'Geography ',
    'World Affairs ',
    'Research ',
    'Academia ',
    'Pop Culture ',
    'History',
    'Current Events ',
    'General Knowledge',
];

export function List({ options = sampleOptions }) {
    const [showLeftMask, setShowLeftMask] = useState(false);
    const [showRightMask, setShowRightMask] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
                const isScrollable = scrollWidth > clientWidth;
                const isAtLeft = scrollLeft > 0;
                const isAtRight = scrollLeft + clientWidth >= scrollWidth - 1; // A small margin to handle precision issues

                setShowLeftMask(isScrollable && isAtLeft);
                setShowRightMask(isScrollable && !isAtRight);
            }
        };

        const element = listRef.current;
        element.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ul className={`list-container ${showLeftMask ? 'list-left-mask' : ''} ${showRightMask ? 'list-right-mask' : ''}`}
        ref={listRef}>
            {options.map(option => <li key={option}>{option}</li>)}
        </ul>
    );
}
