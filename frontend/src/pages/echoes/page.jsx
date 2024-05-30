import { FieldsetInput, Input } from '../../components/input/input.jsx'

import './page.css';

export function Homepage() {
    return (
        <div className='homepage-container'>
            <FieldsetInput />
            <Input />
            <Input />
            <Input />
        </div>
    )
}