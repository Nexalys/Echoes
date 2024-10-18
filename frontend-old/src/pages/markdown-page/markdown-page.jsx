import './markdown-page.css'
import Markdown from 'react-markdown'

import { useState } from 'react'

export function MarkdownEditor() {
    const [markdown, setMarkdown ]= useState('# Heading\nNot heading');

    // function handleOnChange(event) {
    //     const md = markdown;
    //     setMarkdown(md + event.target.textContent)
    // }

    function handleOnReturn(event) {
        const md = markdown;

        if (event.code === 'Enter') {
            setMarkdown(md + '\n')
        }
    }

    return (
        <div className='markdown-container'>
            <div className='markdown-editor' contentEditable='true' onInput={(event) => handleOnChange(event)} onKeyDown={(event) => handleOnReturn(event)}>
                Edit here.
            </div>
            <Markdown className='markdown-display'>{markdown}</Markdown>
        </div>
    )
}