import './input.css';

export function Input({ fieldname='', placeholder='' }) {
    return (
        <div className='input-container'>
            {fieldname && <span className='fieldname'>{fieldname}</span>}
            <input />
        </div>
    )
}