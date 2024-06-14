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
    'History ',
    'Current Events ',
    'General Knowledge',
]

export function List({ options=sampleOptions }) {
    return (
        <ul className='list-container'>
            {options.map(option => <li>{option}</li>)}
        </ul>
    )
}